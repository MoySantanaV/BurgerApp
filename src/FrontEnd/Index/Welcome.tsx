import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { Button, ButtonToolbar, FlexboxGrid, Form, Grid, Panel } from 'rsuite'
import { incrementCount, decrementCount, clearRequestOrder } from '../../Redux/Products/Products';
import { CurrentOrderList } from '../CurrentOrder/CurrentOrderList';
import FormControl from 'rsuite/esm/FormControl';
import { Product } from '../../App/entity';
import { createOrder, initOrders } from '../../Redux/Orders/OrdersReducer';
import { initProducts } from '../../Redux/Products/ProductReducer';
import {toast} from 'react-toastify'
import { OrderRecordsItem } from '../OrderRecords/OrderRecordsItem';

const Welcome = () => {
  const [newOrder, setNewOrder] = useState<any>({ clientName: "" })
  const products: Product[] = useAppSelector(({products}) => products.products)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(initProducts())
    dispatch(initOrders())
  },[])

  const onChangeValue = (value: Record<string, { clientName: string }>) => {
    setNewOrder(value)
  }

  const onClear = () => {
    dispatch(clearRequestOrder())
    toast.success("Form has been cleaned",{theme:"colored"})
    setNewOrder({ clientName: "" })
  }

  const isValidCount = (products: any[]) =>{
    let countIsValid = 0 
    products.forEach(({count})=> count > 0 ? countIsValid++ : countIsValid )
    return countIsValid > 0 ? true : false
  }

  const onCreateOrderSubmit = () => {
    if(newOrder.clientName ==='') return toast.info("Add client's name",{theme: 'colored'})
    if(!isValidCount(products))return toast.info('Add at least one product',{theme: 'colored'})

    dispatch(createOrder({
      
      productsOrdered: products,
      clientName: newOrder.clientName,
      isComplete: false

    }))
    toast.success('Order was created',{theme: 'colored'})
    dispatch(clearRequestOrder())
    setNewOrder({ clientName: "" })
  }

  return (
    <>
      <h1>Welcome</h1>
      <h4>Burger App</h4>
      <Grid>
        <Form formValue={newOrder} onChange={(clientName: Record<string, { clientName: string }>) => onChangeValue(clientName)}>
          <FlexboxGrid>
            <Form.Group controlId="clientName">
              <FormControl style={{ width: 1000, marginTop: 25 }} name="clientName" type="text" placeholder="Order For" />
            </Form.Group>
          </FlexboxGrid>
        </Form>
        <FlexboxGrid justify="center">
          {products && products.map((product) => (
            <div className='' key={product._id}>
              <Panel shaded bordered bodyFill style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 20, display: 'flex', width: 210, height: 220 }}>
                <Panel header={`${product.name}`}>
                  <p>{product.price}</p>
                </Panel>
                <ButtonToolbar>
                  <Button appearance='subtle' disabled={product.count <= 0 ? true : false} onClick={() => dispatch(decrementCount(product._id))}>-</Button>

                  <small> {product.count} </small>

                  <Button appearance='subtle' onClick={() => dispatch(incrementCount(product._id))}>+</Button>
                </ButtonToolbar>
              </Panel>
            </div>
          ))}
        </FlexboxGrid>

        <FlexboxGrid justify="end" style={{ marginTop: 20 }}>
          <Form.Group>
            <ButtonToolbar>
              <Button color="orange" appearance="primary" onClick={onClear}>Clear</Button>
              <Button color="orange" appearance="primary" onClick={onCreateOrderSubmit}>Create Order</Button>
            </ButtonToolbar>
          </Form.Group>
        </FlexboxGrid>

        <CurrentOrderList style={{ marginBottom: 100 }} />

        <OrderRecordsItem/>
      </Grid>
    </>

  )
}

export { Welcome }
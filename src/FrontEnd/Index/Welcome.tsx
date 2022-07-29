import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { Button, ButtonToolbar, FlexboxGrid, Form, Grid, Panel } from 'rsuite'
import { incrementCount, decrementCount, clearRequestOrder } from '../../Redux/Products/Products';
import { CurrentOrderList } from '../CurrentOrder/CurrentOrderList';
import { addOrder } from '../../Redux/Orders/Orders';
import FormControl from 'rsuite/esm/FormControl';
import { v4 as uuid } from 'uuid';
import { OrderRecordsList } from '../OrderRecords/OrderRecordsList';
import { Product } from '../../App/entity';


const Welcome = () => {
  const [newOrder, setNewOrder] = useState<any>({ clientName: "" })
  const products: Product[] = useAppSelector(({products}) => products.products)
  const dispatch = useAppDispatch()

  const handleChange = (value: Record<string, { clientName: string }>) => {
    setNewOrder(value)

  }

  const onClear = () => {
    dispatch(clearRequestOrder())
    setNewOrder({ clientName: "" })
  }

  const isValidCount = (products: any[]) =>{
    let countIsValid = 0 
    products.forEach(({count})=> count > 0 ? countIsValid++ : countIsValid )
    return countIsValid > 0 ? true : false
  }

  const handleSubmit = () => {
    if(Object.keys(newOrder).length <= 0)return
    if(!isValidCount(products))return
    dispatch(addOrder({
      idOrder: uuid(),
      productsOrdered: products,
      clientName: newOrder.clientName,
      isComplete: false

    }))
    dispatch(clearRequestOrder())
    setNewOrder({ clientName: "" })

  }

  return (
    <>
      <h1>Welcome</h1>
      <h4>Burger App</h4>
      <Grid>
        <Form formValue={newOrder} onChange={(clientName: Record<string, { clientName: string }>) => handleChange(clientName)}>
          <FlexboxGrid>
            <Form.Group controlId="clientName">
              <FormControl style={{ width: 1000, marginTop: 50 }} name="clientName" type="text" placeholder="Order For" />
            </Form.Group>
          </FlexboxGrid>
        </Form>
        <FlexboxGrid justify="center">
          {products && products.map((product, ) => (
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
              <Button color="orange" appearance="primary" onClick={handleSubmit}>Create Order</Button>
            </ButtonToolbar>
          </Form.Group>
        </FlexboxGrid>

        <CurrentOrderList style={{ marginBottom: 100 }} />

        <OrderRecordsList/>
      </Grid>
    </>

  )
}

export { Welcome }
import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { Button, ButtonToolbar, FlexboxGrid, Form, Grid, Input, Panel } from 'rsuite'
import { incrementCount, decrementCount, clearOrder } from '../../Redux/Products';
import { CurrentOrderList } from '../CurrentOrder/CurrentOrderList';
import { addOrder } from '../../Redux/Orders';
import FormControl from 'rsuite/esm/FormControl';


const Welcome = () => {
  const [newOrder, setNewOrder] = useState<any>({clientName:""})
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handleChange = (value: Record<string, {clientName:string}>) => {
    setNewOrder(value)
    
  }

  const onClear = () => {
    dispatch(clearOrder())
    setNewOrder({clientName:""})
  }

  const handleSubmit = () => {
    dispatch(addOrder({
      ...products,
      clientName: newOrder.clientName,
    }))
    dispatch(clearOrder())
    setNewOrder({clientName:""})

  }

  return (
    <>
      <h1>Welcome</h1>
      <h4>Burger App</h4>
      <Grid>
        <Form formValue={newOrder} onChange={(clientName: Record<string, {clientName:string}>)=>handleChange(clientName)}>
          <FlexboxGrid>
            <Form.Group controlId="clientName">
              <FormControl style={{ width: 1000, marginTop: 50 }} name="clientName" type="text" placeholder="Order For" />
            </Form.Group>
          </FlexboxGrid>
        </Form>
        <FlexboxGrid justify="center">
          {products && products.map((product, index) => (
            <div className='' key={index}>
              <Panel shaded bordered bodyFill style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 20, display: 'flex', width: 210, height: 220 }}>
                <Panel header={`${product.name}`}>
                  <p>{product.price}</p>
                </Panel>
                <ButtonToolbar>
                  <Button appearance='subtle' disabled={product.count <= 0 ? true : false} onClick={() => dispatch(decrementCount(product.id))}>-</Button>

                  <small> {product.count} </small>

                  <Button appearance='subtle' onClick={() => dispatch(incrementCount(product.id))}>+</Button>
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
      </Grid>
    </>

  )
}

export { Welcome }
import React from 'react'
import { Button, ButtonToolbar, FlexboxGrid, Grid, Input } from 'rsuite';
import { ProductItem } from './ProductItem';

const PorductList = ({ children }: any) => {

  function onClear(): void {
    console.log('Order Clean')
  }

  function onCreateOrder(): void {
    console.log('Order Created')
  }
  const products = [
  { id: 1, name: "Double Cheese Burger", price: 90 },
  { id: 2, name: "Bacon Burger", price: 110 },
  { id: 3, name: "Hawaian Burger", price: 115 },
  { id: 4, name: "Chicken Burger", price: 90 },
  { id: 5, name: "Wings 8pcs", price: 80 },
  { id: 6, name: "Wings 16pcs", price: 160 },
  { id: 7, name: "Potato Chips", price: 45 },
  { id: 8, name: "Soda", price: 15 },
  ]


  return (
    <Grid >
      <div>
        <h3>Products</h3>
        <FlexboxGrid justify="center">
          <Input style={{ width: 1000 }} type="text" placeholder="Order For" />
          {products && products.map((product, index) => (
            <div className='' key={index}>
              <ProductItem key={product.id} product={product} />
            </div>
          ))}
        </FlexboxGrid>
      </div >

      <FlexboxGrid justify="end" style={{ marginTop: 20 }}>
        <ButtonToolbar  >
          <Button color="orange" appearance="subtle" onClick={onClear}>Clear</Button>
          <Button color="orange" appearance="subtle" onClick={onCreateOrder}>Create Order</Button>
        </ButtonToolbar>
      </FlexboxGrid>
    </Grid>

  );

}

export { PorductList }
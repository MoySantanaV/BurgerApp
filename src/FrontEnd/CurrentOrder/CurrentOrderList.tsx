import { FlexboxGrid, Grid } from 'rsuite'
import { CurrentOrderItem } from './CurrentOrderItem'



const CurrentOrderList = ({ children }: any) => {

  const orders:any = [{id:0 , customerName: 'John', productsOrdered: [{idProductOrdered:0, productOrderedName:'Double Cheese Burger'},{idProductOrdered:1, productOrderedName:'Bacon Burger'}], prices:[90,100]},
                      {id:1 , customerName: 'Moises', productsOrdered: [{idProductOrdered:0, productOrderedName:'Potato Chips'},{idProductOrdered:1, productOrderedName:'Soda'}], prices:[45,15]}]
  const total: number[] = orders.map( (order: { prices: number[] }) => order.prices.reduce((accumulator: number, current: number):number => accumulator + current ))
  const orderedProducts: string[] = orders.map((order:{productsOrdered: any }) => order.productsOrdered.map((product: { productOrderedName: string[], idProductOrdered: any }) => <ul key={product.idProductOrdered}>{product.productOrderedName}</ul> ) )

  return (
    <Grid className="show-grid">
          <h3 style={{marginTop:30}}>Current Order</h3>
      <FlexboxGrid>
          {orders && orders.map((order: { id: number, customerName: string }, index: number) => (
          <div key={index}>
            <CurrentOrderItem key={order.id} customerName={order.customerName} total={total} orderedProducts={orderedProducts} />
          </div>))}

      </FlexboxGrid>
    </Grid>
  )
}

export { CurrentOrderList }
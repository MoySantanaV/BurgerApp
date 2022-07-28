import { FlexboxGrid, Grid } from 'rsuite'
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { CurrentOrderItem } from './CurrentOrderItem'
import { v4 as uuid } from 'uuid';



const CurrentOrderList = ({ children }: any) => {
  const orders = useAppSelector((state)=>state.orders)
  const products = useAppSelector((state) => state.products)
  


  return (
    <Grid >
      <div>
          <h3 style={{marginTop:30}}>Current Order</h3>
      <FlexboxGrid justify="center">
          {orders && orders.map((order,index) => (
          <div key={index}>
            <CurrentOrderItem key={order.idOrder} order={order} />
          </div>))}
      </FlexboxGrid>
      </div>
    </Grid>
  )
}

export { CurrentOrderList }
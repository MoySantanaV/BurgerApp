import { FlexboxGrid, Grid } from 'rsuite'
import { useAppSelector,  } from '../../App/hooks'
import { CurrentOrderItem } from './CurrentOrderItem'




const CurrentOrderList = ({ children }: any) => {
  const orders = useAppSelector((state)=>state.orders)


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
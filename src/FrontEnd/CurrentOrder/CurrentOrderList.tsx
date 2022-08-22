import { useEffect } from "react";
import { FlexboxGrid, Grid } from "rsuite";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { initOrders } from "../../Redux/Orders/OrdersReducer";
import { CurrentOrderItem } from "./CurrentOrderItem";

const CurrentOrderList = () => {
  const orders = useAppSelector(({ orders }) => orders.orders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initOrders());
  }, []);

  return (
    <Grid>
      <div style={{ marginBottom: 300 }}>
        <h3 style={{ marginTop: 50 }}>Current Order</h3>
        <FlexboxGrid justify="center">
          {orders &&
            orders.map((order) => (
              <div key={order._id}>
                <CurrentOrderItem key={order._id} order={order} />
              </div>
            ))}
        </FlexboxGrid>
      </div>
    </Grid>
  );
};

export { CurrentOrderList };

import { eraseOrder } from '../../Redux/Orders/OrdersReducer';
import { createRecord } from '../../Redux/Records/RecordsReducer';
import { Product } from '../../App/entity';
import { useAppDispatch } from '../../App/hooks';
import { toast } from 'react-toastify'
import { Panel, ButtonToolbar, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const CurrentOrderItem = ({ order }: any) => {
  const { clientName, productsOrdered } = order;
  const dispatch = useAppDispatch()

  const gettingDate = () => {

    var date: Date = new Date()
    var [month, day, year, hours, minutes] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes()];
    return `${month + 1}/${day}/${year} ${hours}:${minutes <= 9 ? `0${minutes}` : `${minutes}`}`
  }

  const onDeleteOrder = (id: string) => {
    dispatch(eraseOrder(id))
    toast.success('Order deleted', {theme: "colored"})

  }
  const onCompleteOrder = (id: string) => {

    const productsOnCurrentOrder = productsOrdered.filter((ele: Product) => ele.count > 0).map((product: Product) => product.name)
    const total = productsOrdered.reduce((total: number, order: Product) => total + (order.price * order.count), 0)

    dispatch(createRecord({
      _id: order._id,
      date: gettingDate(),
      ordersRecorded: productsOnCurrentOrder,
      price: total,

    }))

    dispatch(eraseOrder(id))
    toast.success('Order saved', { theme: "colored" })

  }

  return (
    <>
      <Panel
        shaded
        bordered
        bodyFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          display: 'flex',
          width: 220,
          height: 305,
        }}
      >
        <Panel header={<b>{clientName}'s Order</b>}>
          {productsOrdered &&
            // eslint-disable-next-line array-callback-return
            productsOrdered.map(({ _id, name, count }: Product) => {

              if (count > 0) {
                return <p key={_id}>{`(${count}) ${name}`} </p>
              }
            }
            )}
          <p><b>Total: {productsOrdered.reduce((total: number, order: Product) => total + (order.price * order.count), 0)}</b></p>

        </Panel>
      </Panel>
      <ButtonToolbar style={{ marginTop: 40 }}>
        <Button
          color="red"
          appearance="primary" onClick={() => onDeleteOrder(order._id)}
        >
          Delete
        </Button>
        <Button
          color="green"
          appearance="primary" onClick={() => onCompleteOrder(order._id)}
        >
          Complete
        </Button>
      </ButtonToolbar>
    </>
  );
};

export { CurrentOrderItem };

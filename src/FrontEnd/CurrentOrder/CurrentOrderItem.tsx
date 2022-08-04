
import { Panel, ButtonToolbar, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Product } from '../../App/entity';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { editOrder, eraseOrder, initOrders } from '../../Redux/Orders/OrdersReducer';
import {toast} from 'react-toastify'
import { createRecord, initRecords } from '../../Redux/Records/RecordsReducer';

const CurrentOrderItem = ({ order }: any) => {
  const { clientName, productsOrdered } = order;
  const records = useAppSelector(({records})=> records.records) 
  const dispatch = useAppDispatch()

  const gettingDate = () =>{

    var date: Date = new Date()
    var [month, day, year, hours, minutes] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes()];    
    return `${month+1}/${day}/${year} ${hours}:${minutes}`
  }

  const handleDelete = (id: string) =>{
    dispatch(eraseOrder(id))
    dispatch(initOrders())
  }
  const handleComplete= (id:string) =>{

    const productsOnCurrentOrder =productsOrdered.filter((ele: Product)=> ele.count > 0 ).map((product: Product) => product.name)
    const total = productsOrdered.reduce((total: number, order:Product)=> total + (order.price * order.count),0)


    dispatch(createRecord({
      _id: order._id,
      date: gettingDate(),
      ordersRecorded: productsOnCurrentOrder,
      price: total,
      
    })) 

    dispatch(initRecords())
    dispatch(eraseOrder(id))
    toast.success('completado perro', {theme: "colored"})
  
  }

 



  return (
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
        height: 400,
      }}
    >
      <Panel header={`${clientName}'s Order`}>
        {productsOrdered &&
          // eslint-disable-next-line array-callback-return
          productsOrdered.map(({_id, name, count}: Product) => {

            if(count > 0){
              return <p key={_id}>{`(${count}) ${name}`} </p> 
            }
          }
                          
          )}
          <p>Total: {productsOrdered.reduce((total: number, order:Product)=> total + (order.price * order.count),0)}</p>

        <ButtonToolbar style={{ marginTop: 30 }}>
          <Button
            color="red"
            appearance="primary" onClick={() => handleDelete(order._id)}
          >
            Delete
          </Button>
          <Button
            color="green"
            appearance="primary" onClick={()=> handleComplete(order._id)}
          >
            Complete
          </Button>
        </ButtonToolbar>
      </Panel>
    </Panel>
  );
};

export { CurrentOrderItem };

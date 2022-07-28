
import { Panel, ButtonToolbar, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Product } from '../../App/entity';
import { useAppDispatch } from '../../App/hooks';
import { deleteOrder } from '../../Redux/Orders';
import { completeOrders } from '../../Redux/Records';

const CurrentOrderItem = ({ order }: any) => {
  const { clientName, productsOrdered } = order;
  const dispatch = useAppDispatch()

  const gettingDate = () =>{

    var date: Date = new Date()
    var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];    
    return `${month+1}/${day}/${year}`
  }

  const handleDelete = (id: any) =>{
    dispatch(deleteOrder(id))
  }
  const handleComplete= (id:number) =>{
    const productsOnCurrentOrder =productsOrdered.filter((ele: Product)=> ele.count > 0 ).map((product: Product) => product.name)

    const total = productsOrdered.reduce((total: number, order:Product)=> total + (order.price * order.count),0)

    console.log(productsOnCurrentOrder)
    dispatch(completeOrders({
      idRecord: order.idOrder,
      Date: gettingDate(),
      ordersRecorded: productsOnCurrentOrder,
      price: total,
      
    }))

    

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
        height: 220,
      }}
    >
      <Panel header={`${clientName}'s Order`}>
        {productsOrdered &&
          // eslint-disable-next-line array-callback-return
          productsOrdered.map(({id, name, count}: Product) => {

            if(count > 0){
              return <p key={id}>{`(${count}) ${name}`} </p> 
            }
          }
                          
          )}
          <p>Total: {productsOrdered.reduce((total: number, order:Product)=> total + (order.price * order.count),0)}</p>

        <ButtonToolbar style={{ marginTop: 30 }}>
          <Button
            color="red"
            appearance="primary" onClick={() => handleDelete(order.idOrder)}
          >
            Delete
          </Button>
          <Button
            color="green"
            appearance="primary" onClick={()=> handleComplete(order.idOrder)}
          >
            Complete
          </Button>
        </ButtonToolbar>
      </Panel>
    </Panel>
  );
};

export { CurrentOrderItem };

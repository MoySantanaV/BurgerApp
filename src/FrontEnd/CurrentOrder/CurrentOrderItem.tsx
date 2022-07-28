import { Panel, ButtonToolbar, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Product } from '../../App/entity';
import { useAppDispatch } from '../../App/hooks';
import { deleteOrder } from '../../Redux/Orders';

const CurrentOrderItem = ({ order }: any) => {
  const { id, clientName, productsOrdered, isComplete } = order;
  const dispatch = useAppDispatch()

  const handleDelete = (id: any) =>{
    dispatch(deleteOrder(id))
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
          productsOrdered.map(({id, name, price, count}: Product) => {
            if(count > 0){
              return <p key={id}>{`(${count}) ${name}`} </p> 
            }
          }
                          
          )}

        <ButtonToolbar style={{ marginTop: 30 }}>
          <Button
            color="red"
            appearance="primary" onClick={() => handleDelete(order.idOrder)}
          >
            Delete
          </Button>
          <Button
            color="green"
            appearance="primary" /* onClick={() => handleOpen(product)} */
          >
            Complete
          </Button>
        </ButtonToolbar>
      </Panel>
    </Panel>
  );
};

export { CurrentOrderItem };

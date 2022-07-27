import { Panel, Button, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'


const ProductItem = ({ product,handleDelete, handleOpen }: any) => {


    const {/* id */ name, price } = product;

    return (
        <Panel shaded bordered bodyFill style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 20, display: 'flex', width: 220, height: 220 }}>
            <Panel header={`${name}`}>
                <p>{`$ ${price}`}</p>
            </Panel>
            <ButtonToolbar>
                <Button color="red" appearance="primary" onClick={() => handleDelete(product.id)} >Delete</Button>
                <Button color="cyan" appearance="primary" onClick={()=> handleOpen(product)} >Edit</Button>
{/*                 <Button appearance='subtle' disabled={count <= 0 ? true : false} onClick={() => dispatch(decrement())}>-</Button>
                <small> {count} </small>
                <Button appearance='subtle' onClick={() => dispatch(increment())}>+</Button> */}
            </ButtonToolbar>
        </Panel>
    )
}

export { ProductItem }
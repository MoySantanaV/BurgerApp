
import { Panel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'

const CurrentOrderItem = ({ total, orderedProducts, customerName }:any) => {
  console.log(orderedProducts)
  return (


    <Panel shaded bordered bodyFill style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 20, display: 'flex', width: 220 }}>
      <Panel header={`${customerName}'s Order`}>
        {orderedProducts}    
        <p>{total}</p>
      </Panel>
    </Panel>
    
  )
}

export { CurrentOrderItem }
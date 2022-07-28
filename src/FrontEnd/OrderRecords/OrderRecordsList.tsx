import { Grid } from "rsuite"
import { OrderRecordsItem } from "./OrderRecordsItem"

const OrderRecordsList = ({ children }: any) => {

  return (
    <div>
      <Grid className="show-grid">
        <h3 style={{marginTop:50}}>Order Records</h3>
        <OrderRecordsItem/>
      </Grid>
      

    </div>
  )
}

export { OrderRecordsList }
import { useEffect } from 'react'
import { eraseRecord, initRecords } from '../../Redux/Records/RecordsReducer'
import { useAppDispatch, useAppSelector } from '../../App/hooks'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import { Button, Grid } from 'rsuite'
import { toast } from 'react-toastify'

const OrderRecordsItem = () => {

  const records = useAppSelector(({ records }) => records.records)
  const dispatch = useAppDispatch()

  const ButtonCell = ({ rowData, dataKey, ...props }: any) => (
    <Cell {...props}><Button style={{ verticalAlign: "super" }} appearance="link" onClick={() => deleteRecord(rowData._id)}>Delete</Button></Cell>
  );

  useEffect(() => {
    dispatch(initRecords())
  }, [])

  const deleteRecord = (id: string) => {
    dispatch(eraseRecord(id))
    toast.success("Order record deleted", {theme:'colored'})
  }

  return (
    <Grid className="show-grid">
      <h3 style={{marginTop:50}}>Order Records</h3>
      <Table
        
        style={{ marginTop: 50, marginBottom:100 }}
        wordWrap="break-word"
        data={records}
        bordered
        autoHeight
        onSortColumn={(sortColumn, sortType) => {
          console.log(sortColumn, sortType);
        }}
      >
        <Column width={150} resizable >
          <HeaderCell>
            Date
          </HeaderCell>
          <Cell dataKey="date" />
        </Column>

        <Column flexGrow={1} >
          <HeaderCell>
            Products Ordered
          </HeaderCell>
          <Cell dataKey="ordersRecorded" />
        </Column>

        <Column width={80} >
          <HeaderCell>Price</HeaderCell>
          <Cell dataKey="price" />
        </Column>

        <Column width={100}  >
          <HeaderCell>
            Delete
          </HeaderCell >
          <ButtonCell dataKey="_id" style={{ verticalAlign: "top", marginTop: -7 }} />
        </Column>
      </Table>
    </Grid>
  )
}

export { OrderRecordsItem }
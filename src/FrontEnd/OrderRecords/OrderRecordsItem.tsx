import { useEffect } from 'react'
import { Button, ButtonToolbar, FlexboxGrid, Grid } from 'rsuite'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'

import { useAppDispatch, useAppSelector } from '../../App/hooks'
import { eraseRecord, initRecords } from '../../Redux/Records/RecordsReducer'


const OrderRecordsItem = () => {

const records = useAppSelector(({records})=> records.records) 
const dispatch = useAppDispatch()

const ButtonCell = ({ rowData, dataKey, ...props }:any) => (
  <Cell {...props}><Button  style={{verticalAlign: "super" }} appearance="link"  onClick={() => deleteRecord(rowData._id)}>Delete</Button></Cell>
);

useEffect(()=>{
  dispatch(initRecords())
},[])

 
const deleteRecord =  (id: string) =>{
  dispatch(eraseRecord(id))
}

  return (
    <Grid>
    <Table
    style={{marginTop: 50}}
    height={420}
    data={records}
    bordered
    autoHeight
    affixHeader
    affixHorizontalScrollbar
    cellBordered
    onSortColumn={(sortColumn, sortType) => {
      console.log(sortColumn, sortType);
    }}
  >
    <Column flexGrow={1} >
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

    <Column width={100} resizable>
      <HeaderCell>Price</HeaderCell>
      <Cell dataKey="price" />
    </Column>

    <Column width={100}  >
    <HeaderCell>
        Delete
      </HeaderCell >
      
      <ButtonCell dataKey="_id" style={{verticalAlign: "top", marginTop: -7 }} / >
         

      
    </Column>

  </Table>
  </Grid>
  )
}

export  {OrderRecordsItem}
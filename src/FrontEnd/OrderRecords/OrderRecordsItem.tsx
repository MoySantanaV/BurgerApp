import { useEffect } from 'react'
import { FlexboxGrid, Grid } from 'rsuite'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import { useAppDispatch, useAppSelector } from '../../App/hooks'
import { initRecords } from '../../Redux/Records/RecordsReducer'


const OrderRecordsItem = () => {

const records = useAppSelector(({records})=> records.records)
const dispatch = useAppDispatch()

useEffect(()=>{
  dispatch(initRecords())
  console.log(records)
},[])


  return (
    <Grid className="show-grid">
    <Table
      style={{marginTop:20, marginBottom: 50}}
      height={600}
      data={records}
      onRowClick={records => {
        console.log(records);
      }}
    >
      <Column width={300} align="center" >
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="_id" />
      </Column>

      <Column width={90} >
        <HeaderCell>Date</HeaderCell>
        <Cell dataKey="Date" />
      </Column>

      <Column width={680}>
        <HeaderCell>Products</HeaderCell>
        <Cell dataKey="ordersRecorded" />
      </Column>

      <Column width={100}>
        <HeaderCell>Price</HeaderCell>
        <Cell dataKey="price" />
      </Column>

    </Table>
    <FlexboxGrid justify="end" style={{marginBottom:50}}>
    <h5>{`Total: ${records.map(item => item.price).reduce((acc: number,current: number) => acc + current,0)}`}</h5>
    </FlexboxGrid>
    </Grid>

  )
}

export  {OrderRecordsItem}
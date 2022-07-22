import React from 'react'
import { FlexboxGrid, Grid } from 'rsuite'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'

const OrderRecordsItem = () => {

  const data = [
    { id: 1, name: "Double Cheese Burger", price: 90 },
    { id: 2, name: "Bacon Burger", price: 110 },
    { id: 3, name: "Hawaian Burger", price: 115 },
    { id: 4, name: "Chicken Burger", price: 90 },
    { id: 5, name: "Wings 8pcs", price: 80 },
    { id: 6, name: "Wings 16pcs", price: 160 },
    { id: 7, name: "Potato Chips", price: 45 },
    { id: 8, name: "Soda", price: 15 },
  ]
  return (
    <Grid className="show-grid">
    <Table
      style={{marginTop:20, marginBottom: 50}}
      height={400}
      data={data}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column width={70} align="center" >
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={100} >
        <HeaderCell>Date</HeaderCell>
        <Cell dataKey="date" />
      </Column>

      <Column width={680}>
        <HeaderCell>name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={100}>
        <HeaderCell>Price</HeaderCell>
        <Cell dataKey="price" />
      </Column>

    </Table>
    <FlexboxGrid justify="end" style={{marginBottom:50}}>
    <p>{`Total: ${data.map(item => item.price).reduce((acc: number,current: number) => acc + current)}`}</p>
    </FlexboxGrid>
    </Grid>

  )
}

export  {OrderRecordsItem}
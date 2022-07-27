import React from 'react'
import { FlexboxGrid, Grid, Input } from 'rsuite'
import { Menu } from '../Product/Menu'


const Welcome = () => {
  return (
    <>
    <h1>Welcome</h1>
    <h4>Burger App</h4>
<Grid>
  <FlexboxGrid>
     <Input style={{ width: 1000, marginTop:50}} type="text" placeholder="Order For" />
    <Menu/>
  </FlexboxGrid>
</Grid>
    </>

  )
}

export {Welcome}
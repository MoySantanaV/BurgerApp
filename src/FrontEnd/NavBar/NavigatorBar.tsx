import React from 'react'
import { Navbar, Nav, NavProps } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'

const NavigatorBar = ({ onSelect, activeKey}:NavProps) => {

      
  return (
    <Navbar>
    <Navbar.Brand >BURGER APP</Navbar.Brand>
    <Nav onSelect={onSelect} activeKey={activeKey}>
      <Nav.Item eventKey="1">Products</Nav.Item>
      <Nav.Item eventKey="2">CurrentOrders</Nav.Item>
      <Nav.Item eventKey="3">Order's Records</Nav.Item>
    </Nav>

  </Navbar>
  )
}

export {NavigatorBar}
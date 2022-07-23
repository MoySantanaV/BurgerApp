import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, NavProps } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'

const NavigatorBar = ({ onSelect, activeKey}:NavProps) => {

      
  return (
    <Navbar>
    <Navbar.Brand >BURGER APP</Navbar.Brand>
    <Nav onSelect={onSelect} activeKey={activeKey}>
      <Nav.Item eventKey="1"><Link to="products">Products</Link> </Nav.Item>
      <Nav.Item eventKey="2"><Link to="currentorders">CurrentOrders</Link></Nav.Item>
      <Nav.Item eventKey="3"><Link to="ordersrecords">Order's Records</Link></Nav.Item>
    </Nav>

  </Navbar>
  )
}

export {NavigatorBar}
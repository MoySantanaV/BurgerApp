import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, NavProps, Badge } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import { useAppSelector } from '../../App/hooks';

const NavigatorBar = ({ onSelect, activeKey}:NavProps) => {

  const orders = useAppSelector(({orders})=>orders.orders)
      
  return (
    <Navbar>
    <Navbar.Brand> <Link to="/">BURGER APP</Link></Navbar.Brand>
    <Nav onSelect={onSelect} activeKey={activeKey}>
      <Nav.Item eventKey="1"><Link to="products">Products</Link> </Nav.Item>
      <Nav.Item eventKey="2"><Link to="currentorders"><Badge content={orders.length > 0 ? orders.length : ""}>CurrentOrders</Badge></Link></Nav.Item>
      <Nav.Item eventKey="3"><Link to="ordersrecords">Order's Records</Link></Nav.Item>
    </Nav>

  </Navbar>
  )
}

export {NavigatorBar}
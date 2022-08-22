import { Link } from "react-router-dom";
import { Navbar, Nav, NavProps, Badge, Toggle, Grid } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { changeMode } from "../../Redux/ThemeMode/Mode";

const NavigatorBar = ({ onSelect, activeKey }: NavProps) => {
  const orders = useAppSelector(({ orders }) => orders.orders);
  const mode = useAppSelector((state) => state.mode.mode);
  const dispatch = useAppDispatch();

  const onClickMode = () => {
    dispatch(changeMode(mode));
  };
  console.log(mode);
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/">BURGER APP</Link>
      </Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1">
          <Link to="products">Products Manager</Link>
        </Nav.Item>
        <Nav.Item eventKey="2">
          <Link to="currentorders">
            <Badge content={orders.length > 0 ? orders.length : ""}>
              CurrentOrders
            </Badge>
          </Link>
        </Nav.Item>
        <Nav.Item eventKey="3">
          <Link to="ordersrecords">Order's Records</Link>
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Grid fluid style={{ marginTop: 18, marginLeft: 20 }}>
          <Toggle onClick={() => onClickMode()} /> Light Mode / Dark Mode
        </Grid>
      </Nav>
    </Navbar>
  );
};

export { NavigatorBar };
import { Panel, Button, ButtonToolbar } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const ProductItem = ({ product, onDeleteProduct, openModal }: any) => {
  const { name, price } = product;

  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
        display: "flex",
        width: 220,
        height: 220,
      }}
    >
      <Panel header={`${name}`}>
        <p>{`$ ${price}`}</p>
      </Panel>
      <ButtonToolbar>
        <Button
          color="red"
          appearance="primary"
          onClick={() => onDeleteProduct(product._id)}
        >
          Delete
        </Button>
        <Button
          color="cyan"
          appearance="primary"
          onClick={() => openModal(product)}
        >
          Edit
        </Button>
      </ButtonToolbar>
    </Panel>
  );
};

export { ProductItem };
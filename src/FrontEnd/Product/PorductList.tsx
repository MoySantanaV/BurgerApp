import { useState } from 'react'
import { Button, ButtonToolbar, FlexboxGrid, Grid, Modal, Form } from 'rsuite';
import { Product } from '../../App/entity';
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { ProductItem } from './ProductItem';
import { addProduct, deleteProduct, editProduct } from '../../Redux/Products';
import { v4 as uuid } from 'uuid';


const PorductList = ({ children }: any) => {

  const products = useAppSelector((state) => state.products)
  const [newProduct, setNewProduct] = useState<Partial<Product>>({})
  const [open, setOpen] = useState(false);

  const handleOpen = (product?: Product) => {
    if (product) {
      setNewProduct(product)
    }
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
    setNewProduct({id:"",name:"", price:0})
  };

  const dispatch = useAppDispatch()

  const handleChange = (value: Partial<Product>): void => {
    setNewProduct(value)

  }

  const handleSubmit = (id?: string): void => {
    if (id) {
      dispatch(editProduct(newProduct))
      
    } else {
      dispatch(addProduct({
        ...newProduct,
        id: uuid(),
        count: 0
      }))
    }
    
    setNewProduct({id:"",name:"", price:0})
    setOpen(false) 
  }

  const handleDelete = (id: any): void => {
    dispatch(deleteProduct(id))
  }

  return (
    <Grid >
      <div>
        <h3>Products Manager</h3>
        <FlexboxGrid >
          {products && products.map((product, index) => (
            <div className='' key={index}>
              <ProductItem key={product.id} product={product} handleDelete={handleDelete} handleOpen={handleOpen} />
            </div>
          ))}
        </FlexboxGrid>
      </div >

      <FlexboxGrid justify="end" style={{ marginTop: 20 }}>
        <ButtonToolbar  >
          <Button color="orange" appearance="primary" onClick={() => handleOpen()}>Add New Product</Button>
        </ButtonToolbar>
      </FlexboxGrid>

      <div className="modal-container">
        <Modal backdrop={'static'} open={open} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>{!newProduct.id ? 'Adding New Product' : "Editing Product"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form formValue={newProduct} onChange={handleChange}>
              <Form.Group controlId="name">
                <Form.ControlLabel>Product Name</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.HelpText tooltip>Product name is required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="price">
                <Form.ControlLabel>Product Price</Form.ControlLabel>
                <Form.Control name="price" type="number" min={0} />
                <Form.HelpText tooltip>Product price is required</Form.HelpText>
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button color="orange" appearance="primary" onClick={() => handleSubmit(newProduct.id)}>Submit</Button>
                  <Button color="orange" appearance="default" onClick={handleClose}>Cancel</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </Grid>



  );

}

export { PorductList }



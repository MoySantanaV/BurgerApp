import { useEffect, useState } from 'react'
import { Button, ButtonToolbar, FlexboxGrid, Grid, Modal, Form } from 'rsuite';
import { Product } from '../../App/entity';
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { ProductItem } from './ProductItem';
/* import { addProduct, deleteProduct, editProduct } from '../../Redux/Products/Products'; */
import { v4 as uuid } from 'uuid';
import { initProducts } from '../../Redux/Products/ProductReducer';


const PorductList = ({ children }: any) => {

  const products: Product[] = useAppSelector(({products}) => products.products)
  const [newProduct, setNewProduct] = useState<Partial<Product>>({})
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch()


  useEffect(()=>{
    dispatch(initProducts())
  },[])

  const handleOpen = (product?: Product) => {
    if (product) {
      setNewProduct(product)
    }
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
    setNewProduct({})
  };

  const handleChange = (value: Partial<Product>): void => {
    setNewProduct(value)

  }

  const handleSubmit = (id?: string): void => {
    if(Object.keys(newProduct).length <= 0)return
    if (id) {
/*       dispatch(editProduct(newProduct))
 */      
    } else {
/*       dispatch(addProduct({
        ...newProduct,
        id: uuid(),
        count: 0
      })) */
    }
    
    setNewProduct({_id:"",name:"", price:0})
    setOpen(false) 
  }

  const handleDelete = (id: any): void => {
/*     dispatch(deleteProduct(id)) */
  }

  return (
    <Grid >
      <div>
        <h3>Products Manager</h3>
        <FlexboxGrid >
          {products && products.map((product) => (
            <div className='' key={product._id}>
              <ProductItem key={product._id} product={product} handleDelete={handleDelete} handleOpen={handleOpen} />
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
            <Modal.Title>{!newProduct._id ? 'Adding New Product' : "Editing Product"}</Modal.Title>
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
                  <Button color="orange" appearance="primary" onClick={() => handleSubmit(newProduct._id)}>Submit</Button>
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



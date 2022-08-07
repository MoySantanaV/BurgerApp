import { useEffect, useState } from 'react'
import { createProduct, initProducts, editProduct, eraseProduct } from '../../Redux/Products/ProductReducer';
import { Product } from '../../App/entity';
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { ProductItem } from './ProductItem';
import { Button, ButtonToolbar, FlexboxGrid, Grid, Modal, Form, Schema } from 'rsuite';
import {toast} from 'react-toastify'

const { StringType, NumberType } = Schema.Types;
  
const model = Schema.Model({
  name: StringType().isRequired('Name is required.'),
  price: NumberType("Must be numbers").isRequired('Price is required.').min(1,"Price should be more than $1")
});

function TextField(props:any) {
  const { name, label } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} />
    </Form.Group>
  );
}

const ProductList = () => {

  const products: Product[] = useAppSelector(({ products }) => products.products)
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ name: "", price: 0 })
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initProducts())
  }, [])

  const openModal = (product?: Product) => {
    if (product) {
      setNewProduct(product)
    }
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false)
    setNewProduct({})
  };

  const onChangeProduct = (value: Partial<Product>): void => {
    
    setNewProduct({
      ...newProduct,
      ...value
    })
  }

  const onSubmitProduct = (id?: string): void => {
    if((!newProduct.name || !newProduct.price) && (!!newProduct.name || !!newProduct.price)){return}
    if(Object.keys(newProduct).length < 2 ) {return}
    if(newProduct.price! <= 0){return}

    if (id) {
      dispatch(editProduct(newProduct))
   
    } else {
      dispatch(createProduct({
        ...newProduct,
        count: 0
      }))
      
    }
    setTimeout(() => {
      setNewProduct({})
    }, 2000);
    
    setOpen(false)
  }

  const onDeleteProduct = (id: string) => {
    dispatch(eraseProduct(id))
    
  }

return (
  <Grid >
    <div >
      <h3>Products Manager</h3>
      <FlexboxGrid >
        {products && products.map((product) => (
          <div className='' key={product._id}>
            <ProductItem key={product._id} product={product} onDeleteProduct={onDeleteProduct} openModal={openModal} />
          </div>
        ))}
      </FlexboxGrid>
    </div >

    <FlexboxGrid justify="end" style={{ marginTop: 20 }}>
      <ButtonToolbar  >
        <Button color="orange" appearance="primary" onClick={() => openModal()}>Add New Product</Button>
      </ButtonToolbar>
    </FlexboxGrid>

    <div className="modal-container">
      <Modal backdrop={'static'} open={open} onClose={closeModal}>
        <Modal.Header>
          <Modal.Title>{!newProduct._id ? 'Adding New Product' : "Editing Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form model={model} onChange={onChangeProduct} formValue={newProduct}>
            <TextField placement="right" name="name" label="Product Name" />
            <TextField name="price" label="Product Price" type="number"/>
            <Form.Group>
              <ButtonToolbar>
                <Button color="orange" appearance="primary" type="submit" onClick={() => onSubmitProduct(newProduct._id)}>Submit</Button>
                <Button color="orange" appearance="default" onClick={closeModal}>Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  </Grid>
);
}

export { ProductList }





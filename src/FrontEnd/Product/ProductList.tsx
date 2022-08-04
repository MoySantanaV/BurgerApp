import { useEffect, useState } from 'react'
import { Button, ButtonToolbar, FlexboxGrid, Grid, Modal, Form, Schema } from 'rsuite';
import { Product } from '../../App/entity';
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { ProductItem } from './ProductItem';
import { createProduct, initProducts, editProduct, eraseProduct } from '../../Redux/Products/ProductReducer';
import {toast} from 'react-toastify'

const { StringType, NumberType } = Schema.Types;
  
const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  price: NumberType("Must be numbers").isRequired('This field is required.')
});

function TextField(props:any) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} />
    </Form.Group>
  );
}

const PorductList = ({ children }: any) => {

  const products: Product[] = useAppSelector(({ products }) => products.products)
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ name: "", price: 0 })
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initProducts())
  }, [])

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
    
    setNewProduct({
      ...newProduct,
      ...value
    })

  }

  const handleSubmit = (id?: string): void => {
    if (Object.keys(newProduct).length <= 0) return
    if (id) {
      dispatch(editProduct(newProduct))
      toast.success('Product has been succesfully', {theme:'colored'})

    } else {
      dispatch(createProduct({
        ...newProduct,
        count: 0
      }))
      toast.success('Product has been created succesfully', {theme:'colored'})
    }
    dispatch(initProducts())
    setNewProduct({})
    setOpen(false)
  }

  const handleDelete = async (id: string) => {
   await dispatch(eraseProduct(id))
    dispatch(initProducts())
    toast.success('Product has been deleted succesfully', {theme:'colored'})
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
          <Form model={model} onChange={handleChange} formValue={newProduct}>
            <TextField name="name" label="Product Name" />
            <TextField name="price" label="Product Price" type="number" min={0}/>
            <Form.Group>
              <ButtonToolbar>
                <Button color="orange" appearance="primary" type="submit" onClick={() => handleSubmit(newProduct._id)}>Submit</Button>
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





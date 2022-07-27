import { createSlice } from "@reduxjs/toolkit";

interface productsState {
    id: string,
    name: string,
    price: number,

}

const initialState: productsState[] = [
    {
        id: "1",
        name: 'Double Cheese Burger',
        price: 90
    },
    {
        id: "2",
        name: 'Bacon Burger',
        price: 110
    }
]


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        addProduct: (state, action)=>{
            state.push(action.payload)
        },
        editProduct:(state, action) => {
            const {id, name, price} = action.payload
            const foundProduct = state.find(product => product.id === id)
            if(foundProduct){
                foundProduct.name = name
                foundProduct.price = price
            }
        },
        deleteProduct: (state,action) =>{
            const productFound = state.find(product => product.id === action.payload)
            if(productFound){
                state.splice(state.indexOf(productFound),1)
            }
        }

    }
})

export const { addProduct, deleteProduct, editProduct } = productSlice.actions
export default productSlice.reducer
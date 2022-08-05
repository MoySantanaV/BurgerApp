import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../App/entity";
import { initProducts } from "./ProductReducer";

interface ProductsState {
    products: Product[]

}

const initialState = {
    products:[]
}


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
/*         addProduct: (state:ProductsState, action: { payload: any; })=>{
            state.products.push(action.payload)
        },
        
        editProduct:(state:ProductsState, action: { payload: Partial<Product> }) => {
            const {_id, name, price} = action.payload
            const foundProduct: any = state.products.find((product: Product) => product._id === _id)
            if(foundProduct){
                foundProduct.name = name
                foundProduct.price = price
            }
        },
        deleteProduct: (state:ProductsState,action: { payload: Partial<Product> }) =>{
            const productFound = state.products.find((product: Product) => product._id === action.payload)
            if(productFound){
                state.products.splice(state.products.indexOf(productFound),1)
            }
        }, */
        incrementCount: (state:ProductsState,action: { payload: any; }) =>{
            const foundProduct = state.products.find((product: Product) => product._id === action.payload)
            if(foundProduct){
                foundProduct.count += 1
 
            }
        },
        decrementCount: (state:ProductsState,action: { payload: any; }) =>{
            const foundProduct = state.products.find((product: Product) => product._id === action.payload)
            if(foundProduct){
                foundProduct.count -= 1
 
            }
        },
        clearRequestOrder: (state:ProductsState) =>{
                state.products.forEach((product:Product)=>{
                product.count = 0
              })

        }


    },

    extraReducers: (builder) => {
        builder.addCase(initProducts.fulfilled,(state, action: { payload: any; })=>{
                state.products = action.payload 
        })
    },
})

export const { /* addProduct, deleteProduct, editProduct, */ incrementCount, decrementCount, clearRequestOrder } = productSlice.actions
export default productSlice.reducer
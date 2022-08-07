import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../App/entity";
import { initProducts } from "./ProductReducer";

interface ProductsState {
    products: Product[]

}

const initialState = {
    products: []
}


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        incrementCount: (state: ProductsState, action: { payload: any; }) => {
            const foundProduct = state.products.find((product: Product) => product._id === action.payload)
            if (foundProduct) {
                foundProduct.count += 1
            }
        },
        decrementCount: (state: ProductsState, action: { payload: any; }) => {
            const foundProduct = state.products.find((product: Product) => product._id === action.payload)
            if (foundProduct) {
                foundProduct.count -= 1
            }
        },
        clearRequestOrder: (state: ProductsState) => {
            state.products.forEach((product: Product) => {
                product.count = 0
            })
        }
    },

    extraReducers: (builder) => {
        builder.addCase(initProducts.fulfilled, (state, action: { payload: any; }) => {
            state.products = action.payload
        })
    },
})

export const { incrementCount, decrementCount, clearRequestOrder } = productSlice.actions
export default productSlice.reducer
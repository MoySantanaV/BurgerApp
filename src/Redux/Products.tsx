import { createSlice } from "@reduxjs/toolkit";

interface productsState {
    id: string,
    name: string,
    price: number,
    count: number

}

const initialState: productsState[] = [
    {
        id: "1",
        name: 'Double Cheese Burger',
        price: 90,
        count: 0
    },
    {
        id: "2",
        name: 'Bacon Burger',
        price: 110,
        count: 0
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
        },
        incrementCount: (state,action) =>{
            const foundProduct = state.find(product => product.id === action.payload)
            if(foundProduct){
                foundProduct.count += 1
 
            }
        },
        decrementCount: (state,action) =>{
            const foundProduct = state.find(product => product.id === action.payload)
            if(foundProduct){
                foundProduct.count -= 1
 
            }
        },
        clearOrder: (state) =>{
                state.forEach((product:productsState)=>{
                product.count = 0
              })

        }


    }
})

export const { addProduct, deleteProduct, editProduct, incrementCount, decrementCount, clearOrder } = productSlice.actions
export default productSlice.reducer
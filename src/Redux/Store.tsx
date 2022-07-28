import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Products'
import orderReducer from './Orders'


const store = configureStore({
    reducer: {
        products: productReducer,
        orders: orderReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export {store}
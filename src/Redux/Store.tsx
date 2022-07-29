import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Products/Products'
import orderReducer from './Orders/Orders'
import recordReducer from './Records/Records'



const store = configureStore({
    reducer: {
        products: productReducer,
        orders: orderReducer,
        records: recordReducer,

    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export {store}
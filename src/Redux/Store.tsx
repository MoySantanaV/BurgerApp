import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter'
import productReducer from './Products'

const store = configureStore({
    reducer: {
        count: counterReducer,
        products: productReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export {store}
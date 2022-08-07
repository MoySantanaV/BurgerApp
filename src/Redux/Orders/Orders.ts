import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../App/entity";
import { initOrders } from "./OrdersReducer";
interface OrdersState {
    orders: Order[]
}

const initialState: OrdersState = {
    orders: []
}

export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {

    }, extraReducers: (builder) => {
        builder.addCase(initOrders.fulfilled, (state, action: { payload: any; }) => {
            state.orders = action.payload
        })
    }
})

export default orderSlice.reducer
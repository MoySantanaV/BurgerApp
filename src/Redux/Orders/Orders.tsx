import { createSlice } from "@reduxjs/toolkit";
import { Order } from "../../App/entity";
import { initOrders } from "./OrdersReducer";



interface OrdersState {

 orders: Order[]

}

const initialState: OrdersState = {
    orders:[]
}


export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrder: (state: OrdersState, action: { payload: any; }) => {

            state.orders.push(action.payload)

        },
        deleteOrder: (state: OrdersState, action: { payload: any; }) => {
            const orderFound = state.orders.find((order: Order) => order._id === action.payload)
            if (orderFound) {
                state.orders.splice(state.orders.indexOf(orderFound), 1)
            }
        }

    }, extraReducers: (builder) =>{
        builder.addCase(initOrders.fulfilled,(state, action: { payload: any; })=>{
            state.orders = action.payload 
        })
    }
})

export const { addOrder, deleteOrder } = orderSlice.actions
export default orderSlice.reducer
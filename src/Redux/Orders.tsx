import { createSlice } from "@reduxjs/toolkit";



interface ordersState {

    idOrder: string,
    clientName: string,
    productsOrdered: string[],
    isComplete: boolean

}

const initialState: ordersState[] = []


export const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            
            state.push(action.payload)

        },
        deleteOrder:(state,action) =>{
            const orderFound = state.find(order => order.idOrder === action.payload)
            if(orderFound){
                state.splice(state.indexOf(orderFound),1)
            }
    }

}})

export const { addOrder,deleteOrder } = orderSlice.actions
export default orderSlice.reducer
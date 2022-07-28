import { createSlice } from "@reduxjs/toolkit";

interface recordsState{
    idRecord: string,
    date: number
    ordersRecorded: string[],
    price: number
}

const initialState: recordsState[] = [

]

export const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers:{
        completeOrders: (state, action) =>{
            state.push(action.payload)
            
        }

    }
})

export const {completeOrders} = recordsSlice.actions
export default recordsSlice.reducer
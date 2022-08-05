import { createSlice } from "@reduxjs/toolkit";
import { Record } from "../../App/entity";
import { initRecords } from "./RecordsReducer";

interface RecordsState{
    records: Record[]
}

const initialState: RecordsState= {
    records:[]
}

export const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers:{
/*         completeOrders: (state: RecordsState, action: { payload: any; }) =>{
            state.records.push(action.payload)
            
        }
 */
    },
    extraReducers: (builder) =>{
        builder.addCase(initRecords.fulfilled,(state, action: { payload: any; })=>{
            state.records = action.payload 
        })
    }
})

/* export const {completeOrders} = recordsSlice.actions */
export default recordsSlice.reducer
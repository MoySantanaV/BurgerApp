import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../../App/entity";
import { getAllRecords } from "../../Utiles/Request";

export const initRecords = createAsyncThunk ('initRecordAction', async () =>{
    const records: Partial<Order[]> = await getAllRecords()
    return records
})


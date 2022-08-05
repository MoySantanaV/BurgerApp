import { createAsyncThunk } from "@reduxjs/toolkit";
import { Record } from "../../App/entity";
import { deleteRecord, getAllRecords, patchRecord, postRecord } from "../../Utiles/Request";

export const initRecords = createAsyncThunk('initRecordAction', async () => {
    const records: Record[] = await getAllRecords()
    return records
})

export const createRecord = createAsyncThunk('createRecord', async (record: Partial<Record>, thunkAPI) => {
    await postRecord(record)
    thunkAPI.dispatch(initRecords())
})

export const editRecord = createAsyncThunk('editProduct', async (record: Partial<Record>, thunkAPI) => {
    await patchRecord(record)
    thunkAPI.dispatch(initRecords())
})

export const eraseRecord = createAsyncThunk('eraseProduct', async (id: string, thunkAPI) => {
    await deleteRecord(id)
    thunkAPI.dispatch(initRecords())
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../../App/entity";
import { getAllOrders } from "../../Utiles/Request";

export const initOrders = createAsyncThunk ('initOrderAction', async () =>{
    const orders: Partial<Order[]> = await getAllOrders()
    return orders
})


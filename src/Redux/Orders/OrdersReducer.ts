import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order } from "../../App/entity";
import {
  getAllOrders,
  patchOrder,
  postOrder,
  deleteOrder,
} from "../../Utiles/Request";

export const initOrders = createAsyncThunk("initOrderAction", async () => {
  const orders: Partial<Order[]> = await getAllOrders();
  return orders;
});

export const createOrder = createAsyncThunk(
  "createOrder",
  async (order: Partial<Order>, thunkAPI) => {
    await postOrder(order);
    thunkAPI.dispatch(initOrders());
  }
);

export const editOrder = createAsyncThunk(
  "editOrder",
  async (order: Partial<Order>, thunkAPI) => {
    await patchOrder(order);
    thunkAPI.dispatch(initOrders());
  }
);

export const eraseOrder = createAsyncThunk(
  "eraseOrder",
  async (id: string, thunkAPI) => {
    await deleteOrder(id);
    thunkAPI.dispatch(initOrders());
  }
);

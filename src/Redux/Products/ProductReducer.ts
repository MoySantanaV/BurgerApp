import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Product } from "../../App/entity";
import {
  deleteProduct,
  getAllProducts,
  patchProduct,
  postProduct,
} from "../../Utiles/Request";

export const initProducts = createAsyncThunk("initProductAction", async () => {
  const products: Partial<Product[]> = await getAllProducts();
  const newProducts = products.map((product) => ({ ...product, count: 0 }));
  return newProducts;
});

export const createProduct = createAsyncThunk(
  "createProduct",
  async (product: Partial<Product>, thunkAPI) => {
    await postProduct(product);
    toast.success("Product created", { theme: "colored" });
    thunkAPI.dispatch(initProducts());
  }
);

export const editProduct = createAsyncThunk(
  "editProduct",
  async (product: Partial<Product>, thunkAPI) => {
    await patchProduct(product);
    toast.success("Product edited", { theme: "colored" });
    thunkAPI.dispatch(initProducts());
  }
);

export const eraseProduct = createAsyncThunk(
  "eraseProduct",
  async (id: string, thunkAPI) => {
    await deleteProduct(id);
    toast.success("Product deleted", { theme: "colored" });
    thunkAPI.dispatch(initProducts());
  }
);
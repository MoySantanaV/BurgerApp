import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../App/entity";
import { getAllProducts } from "../../Utiles/Request";

export const initProducts = createAsyncThunk ('initProductAction', async () =>{
    const products: Partial<Product[]> = await getAllProducts()
    const newProducts = products.map((product)=> ({...product, count: 0}))
    return newProducts
})


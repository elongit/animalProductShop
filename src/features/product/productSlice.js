import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/appData";

const initialState = {
  products: productData,
  cart: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,

  reducers: {

  
  },
});

// Selectors
export const selectAllProducts = (state) => state.products.products;

// Actions


// Reducer
export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productAddActive: false,
};

export const ProductAdd = createSlice({
  name: "productAdd",
  initialState,
  reducers: {
    OpenProductAdd: (state) => {
      state.productAddActive = !state.productAddActive;
    },
    CloseProductAdd: (state) => {
      state.productAddActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenProductAdd, CloseProductAdd } = ProductAdd.actions;

export default ProductAdd.reducer;

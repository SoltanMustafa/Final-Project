import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productUpdateActive: false,
};

export const ProductUpdate = createSlice({
  name: "productUpdate",
  initialState,
  reducers: {
    OpenProductUpdate: (state) => {
      state.productUpdateActive = !state.productUpdateActive;
    },
    CloseProductUpdate: (state) => {
      state.productUpdateActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenProductUpdate, CloseProductUpdate } = ProductUpdate.actions;

export default ProductUpdate.reducer;

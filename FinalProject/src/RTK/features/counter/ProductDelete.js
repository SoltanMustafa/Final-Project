import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDeleteActive: false,
};

export const ProductDelete = createSlice({
  name: "productDelete",
  initialState,
  reducers: {
    OpenProductDelete: (state) => {
      state.productDeleteActive = !state.productDeleteActive;
    },
    CloseProductDelete: (state) => {
      state.productDeleteActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenProductDelete, CloseProductDelete } = ProductDelete.actions;

export default ProductDelete.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  images: [],
  brand: "",
  price: 0,
  salePrice: 0,
  quantity: 0,
};

export const UpdateProductData = createSlice({
  name: "updateProductData",
  initialState,
  reducers: {
    setData: (state, action) => {
      Object.assign(state, action.payload);
    },
    resetState: (state) => initialState,
  },
});

export const { setData, resetState } = UpdateProductData.actions;

export default UpdateProductData.reducer;

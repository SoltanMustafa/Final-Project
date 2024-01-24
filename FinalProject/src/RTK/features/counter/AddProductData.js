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

export const AddProductData = createSlice({
  name: "addProductData",
  initialState,
  reducers: {
    setData: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setData } = AddProductData.actions;

export default AddProductData.reducer;

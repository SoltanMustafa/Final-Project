import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandImage: "",
};

export const BrandImageAdd = createSlice({
  name: "brandImageAdd",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.brandImage = action.payload;
    },
  },
});

export const { setData } = BrandImageAdd.actions;

export default BrandImageAdd.reducer;

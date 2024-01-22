import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandAddActive: false,
};

export const BrandAdd = createSlice({
  name: "brandAdd",
  initialState,
  reducers: {
    OpenBrandAdd: (state) => {
      state.brandAddActive = !state.brandAddActive;
    },
    CloseBrandAdd: (state) => {
      state.brandAddActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenBrandAdd, CloseBrandAdd } = BrandAdd.actions;

export default BrandAdd.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandUpdateActive: false,
};

export const BrandUpdate = createSlice({
  name: "brandUpdate",
  initialState,
  reducers: {
    OpenBrandUpdate: (state) => {
      state.brandUpdateActive = !state.brandUpdateActive;
    },
    CloseBrandUpdate: (state) => {
      state.brandUpdateActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenBrandUpdate, CloseBrandUpdate } = BrandUpdate.actions;

export default BrandUpdate.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quickViewActive: false,
  product: {},
  brand: {},
};

export const QuickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    OpenQuickView: (state, action) => {
      state.quickViewActive = !state.quickViewActive;
      state.product = action.payload.product;
      state.brand = action.payload.brand;
    },
    CloseQuickView: (state) => {
      state.quickViewActive = false;
      state.product = {};
      state.brand = {};
    },
  },
});

export const { OpenQuickView, CloseQuickView } = QuickView.actions;

export default QuickView.reducer;

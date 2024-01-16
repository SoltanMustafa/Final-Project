import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quickViewActive: false,
};

export const QuickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    OpenQuickView: (state) => {
      state.quickViewActive = !state.quickViewActive;
    },
    CloseQuickView: (state) => {
      state.quickViewActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenQuickView, CloseQuickView } = QuickView.actions;

export default QuickView.reducer;

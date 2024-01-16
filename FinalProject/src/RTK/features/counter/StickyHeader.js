import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ScrollValue: 0,
};

export const StickyHeaderSlice = createSlice({
  name: "stickyHeader",
  initialState,
  reducers: {
    ScrollDown: (state) => {
      state.ScrollValue = 1;
    },
    ScrollUp: (state) => {
      state.ScrollValue = 0;
    },
  },
});

export const { ScrollDown, ScrollUp } = StickyHeaderSlice.actions;
export default StickyHeaderSlice.reducer;

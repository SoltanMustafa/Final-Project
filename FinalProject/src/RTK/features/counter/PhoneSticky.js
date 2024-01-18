import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ScrollValue: 0,
};

export const PhoneSticky = createSlice({
  name: "phoneSticky",
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

export const { ScrollDown, ScrollUp } = PhoneSticky.actions;
export default PhoneSticky.reducer;

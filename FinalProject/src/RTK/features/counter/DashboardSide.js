import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarActive: true,
};

export const DashboardSide = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    CloseBarMenu: (state) => {
      state.sideBarActive = !state.sideBarActive;
    },
    OpenBarMenu: (state) => {
      state.sideBarActive = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenBarMenu, CloseBarMenu } = DashboardSide.actions;

export default DashboardSide.reducer;

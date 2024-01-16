import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideMenuActive: false,
};

export const BurgerMenu = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    OpenSideMenu: (state) => {
      state.sideMenuActive = !state.sideMenuActive;
    },
    CloseSideMenu: (state) => {
      state.sideMenuActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenSideMenu, CloseSideMenu } = BurgerMenu.actions;

export default BurgerMenu.reducer;

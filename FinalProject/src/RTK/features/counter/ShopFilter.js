import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterMenuActive: false,
};

export const FilterMenu = createSlice({
  name: "filterMenu",
  initialState,
  reducers: {
    OpenFilterMenu: (state) => {
      state.filterMenuActive = !state.filterMenuActive;
    },
    CloseFilterMenu: (state) => {
      state.filterMenuActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenFilterMenu, CloseFilterMenu } = FilterMenu.actions;

export default FilterMenu.reducer;

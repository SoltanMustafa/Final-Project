import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffAddActive: false,
};

export const StaffAdd = createSlice({
  name: "staffAdd",
  initialState,
  reducers: {
    OpenStaffAdd: (state) => {
      state.staffAddActive = !state.staffAddActive;
    },
    CloseStaffAdd: (state) => {
      state.staffAddActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenStaffAdd, CloseStaffAdd } = StaffAdd.actions;

export default StaffAdd.reducer;

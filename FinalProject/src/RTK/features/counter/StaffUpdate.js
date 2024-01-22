import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffUpdateActive: false,
};

export const StaffUpdate = createSlice({
  name: "staffUpdate",
  initialState,
  reducers: {
    OpenStaffUpdate: (state) => {
      state.staffUpdateActive = !state.staffUpdateActive;
    },
    CloseStaffUpdate: (state) => {
      state.staffUpdateActive = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { OpenStaffUpdate, CloseStaffUpdate } = StaffUpdate.actions;

export default StaffUpdate.reducer;

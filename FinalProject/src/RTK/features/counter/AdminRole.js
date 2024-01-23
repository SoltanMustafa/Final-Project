import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
};

export const AdminRole = createSlice({
  name: "adminRole",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setData } = AdminRole.actions;

export default AdminRole.reducer;

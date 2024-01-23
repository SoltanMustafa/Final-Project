import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editData: [],
};

export const EditAdminData = createSlice({
  name: "editAdminData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.editData = action.payload;
    },
  },
});

export const { setData } = EditAdminData.actions;

export default EditAdminData.reducer;

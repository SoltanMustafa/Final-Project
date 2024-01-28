import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editData: {},
};

export const EditProductData = createSlice({
  name: "editProductData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.editData = action.payload;
    },
    resetData: (state) => initialState,
  },
});

export const { setData, resetData } = EditProductData.actions;

export default EditProductData.reducer;

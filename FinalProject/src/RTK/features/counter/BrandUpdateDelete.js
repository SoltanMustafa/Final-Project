import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editBrand: {},
};

export const EditBrandData = createSlice({
  name: "editBrandtData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.editBrand = action.payload;
    },
    resetBrandData: (state) => initialState,
  },
});

export const { setData, resetBrandData } = EditBrandData.actions;

export default EditBrandData.reducer;

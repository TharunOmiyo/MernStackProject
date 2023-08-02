import { createSlice } from "@reduxjs/toolkit";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { getCategories } from "./actions";

const initialState = {
  categories: [],
  status: "idel",
  error: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pendind]: (state, action) => {
      state.status = "Loadind...";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.status = "Success";
      state.categories = action.payload;
      console.log(state.status, state.categories);
    },
    [getCategories.rejected]: (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    },
  },
});
console.log(categorySlice.reducer);
console.log(initialState.status, initialState.categories);

export default categorySlice.reducer;

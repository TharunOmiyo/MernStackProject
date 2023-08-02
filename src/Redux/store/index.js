import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";

const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
  },
});

export { store };

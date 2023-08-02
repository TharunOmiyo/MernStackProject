import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("getCategories", () => {
  const categories = ["Men", "Women", "Kids", "BestOffers", "All"];
  return categories;
});

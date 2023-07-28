import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Men", "Women", "Kids", "BestOffers"];
const categorySlice = createSlice({
  name: "category",
  initialState,
});

export default categorySlice;

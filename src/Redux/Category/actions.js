import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("getCategories", async () => {
  const categories = await fetch("http://localhost:5001/").then((res) =>
    res.json()
  );
  // console.log(categories, "json");
  // const CAT = fetch("http://localhost:5001/productcategories")
  //   .then((res) => res.json())
  //   .then((res) => res);
  // console.log(CAT, "data");
  return categories;
});

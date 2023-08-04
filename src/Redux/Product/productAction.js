import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProduct", async () => {
  const productData = await fetch("http://localhost:5001/getProducts").then(
    (res) => res.json()
  );

  return productData;
});

import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
  Products: [],
  status: "idel",
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      // console.log(action.payload, "From Slice");
      const filteredProduct = action.payload.product.Products.filter((e) => {
        return (
          e.category_id == action.payload.selectedCategory.parent_category_id
        );
      });
      state.Products = filteredProduct;
    },
    filterByPrice: (state, action) => {
      const filterProduct = action.payload.product.Products.filter((e) => {
        // console.log(e.price);
        return e.price >= action.payload.min && e.price <= action.payload.max;
      });
      state.Products = filterProduct;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "Success";
      state.Products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});
export const { filterProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;

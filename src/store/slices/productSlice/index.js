import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Jacket", price: 45, img: "shop-1.jpg" },
  { name: "Purse", price: 25, img: "shop-2.jpg" },
  { name: "Dress", price: 55, img: "shop-3.jpg" },
  { name: "Denim", price: 35, img: "shop-4.jpg" },
  { name: "Boots", price: 40, img: "shop-5.jpg" },
  { name: "Bag", price: 30, img: "shop-6.jpg" },
];
const productSlice = createSlice({
  name: "products",
  initialState,
});

export default productSlice;

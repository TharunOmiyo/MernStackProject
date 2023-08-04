import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItemsPrice: 0,
  totalItems: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      let item_exist = state.cartItems.find(
        (item) => item.id == action.payload.id
      );

      if (!item_exist) {
        state.cartItems = [...state.cartItems, action.payload];

        state.totalItemsPrice = state.totalItemsPrice + action.payload.price;

        state.totalQuantity = ++state.totalQuantity;
        state.totalItems = ++state.totalItems;
      }
      // console.log(state.cartItems, state.totalQuantity);
    },
    updateItemQuantity: (state, action) => {
      // console.log(state.cartItems);

      let index = action.payload.index;
      if (action.payload.operator == "+") {
        ++state.cartItems[index].quantity;
      } else if (state.cartItems[index].quantity > 1) {
        --state.cartItems[0].quantity;
      }
    },
    deleteCartItems: (state, action) => {
      // console.log(action.payload);
      const filteredData = state.cartItems.filter((ele) => {
        return ele.id !== action.payload.id;
      });
      state.cartItems = filteredData;
      state.totalItemsPrice =
        state.totalItemsPrice - action.payload.price * action.payload.quantity;
      --state.totalItems;
    },
  },
});
export const { addCartItem, updateItemQuantity, deleteCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;

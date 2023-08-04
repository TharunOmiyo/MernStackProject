import React from "react";
import { useSelector } from "react-redux";
import FilledCart from "./Filled";
import EmptyCart from "./Empty";

export default function Cart() {
  const cart = useSelector((state) => state.cr);

  return (
    <div>{cart.cartItems.length === 0 ? <EmptyCart /> : <FilledCart />}</div>
  );
}

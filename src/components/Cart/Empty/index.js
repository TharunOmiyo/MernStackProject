import React from "react";
import "./_empty-cart.scss";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (
    <div>
      <div className="p-5 ec-main">
        <div className="my-4 ec-text">The Empty Cart</div>
        <hr />
        <Link to={"/"}>
          <div className="btn btn-warning my-5">
            <span>Continue Shopping</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

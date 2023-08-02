import React from "react";
import "./_top-nav.scss";

export default function TopNav() {
  console.log("Top NaV");
  return (
    <div>
      <div className="header bg-dark">
        <div className="row bg-dark top-row">
          <div className="brand my-1 col-3">
            <h1>eStore</h1>
          </div>
          <div className="inp-container p-0 m-4 h-25 bg-light col-6 ">
            <div className="dropdown m-0 p-0">
              <select className="select-btn m-0 p-0 w-100">
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Kids</option>
              </select>
            </div>

            <input className="form-control" type="text" placeholder="Enter" />
            <button>
              <i className="fa fa-search" />
            </button>
          </div>
          <div className="login-register p-0 col-2">
            <i className="fa fa-user-circle user-icon" />
            <h5>
              <a>login</a>
            </h5>
            /
            <h5>
              <a>Register</a>
            </h5>
          </div>
          <div className="cart-wishlist col-1 ">
            <ul className="p-0">
              <li className="list-icon">
                <i className="fa fa-heart" />
              </li>
              <li className="list-icon">
                <i className="fa fa-shopping-cart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

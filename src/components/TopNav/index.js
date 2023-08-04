import React, { useState } from "react";
import "./_top-nav.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

export default function TopNav() {
  // console.log("Top NaV");
  const cartItemCount = useSelector((state) => state.cr.totalItems);
  const [userName, setUsername] = useState("");
  // console.log(cartItemCount);
  function successHandler(res) {
    console.log(res.profileObj.name);
    console.log(res);
    setUsername(res.profileObj);
  }
  return (
    <div>
      <div className=" container-fluid header bg-dark">
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
              {userName == "" ? (
                <GoogleLogin
                  buttonText="login"
                  clientId="475334119438-ppb6heganq8eqhanp5vfi79fibrtr1tp.apps.googleusercontent.com"
                  cookiePolicy="single_host_origin"
                  onSuccess={successHandler}
                />
              ) : (
                userName.name
              )}
            </h5>
          </div>
          <div className="cart-wishlist col-1 ">
            <ul className="p-0">
              <li className="list-icon">
                <i className="fa fa-heart" />
              </li>
              <Link to={"/cart"}>
                <li className="list-icon">
                  <i className="fa fa-shopping-cart" />
                  {cartItemCount !== 0 ? (
                    <div className="cart-item-count">
                      <p>{cartItemCount}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

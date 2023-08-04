import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addCartItem } from "../../Redux/Cart/cartSlice";
import "./_product-details.scss";

export default function ProductDetails() {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addCartItem(location.state));
  };
  return (
    <div>
      <div className=" row container my-5 product-details-container">
        <div className="product-img-container col-5">
          <img
            src={require(`../../assets/images/shop/${location.state.product_img}`)}
          />
        </div>
        <div className="product-info-container col-7">
          <span id="product-title">{location.state.product_name}</span>

          <div className="rating-container">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="product-price">
            MRP:
            <span className="price">
              <>{location.state.price}</>
            </span>
            <div>Inclusive of All Taxes</div>
          </div>
          <div className="my-3 product-description-container">
            <span>Some Product Description</span>
          </div>
          <div className="my-5" onClick={addCart}>
            <div className="btn btn-warning cart-button">
              <div className="cart-icon-container">
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="cart-text-container">
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

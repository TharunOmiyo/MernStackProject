import React from "react";
import "./_products.scss";
import { useSelector } from "react-redux";
import productSlice from "../../Redux/Product/productSlice";

const Products = () => {
  const products = useSelector(productSlice.getInitialState);
  console.log("PRoduct NaV");
  return (
    <div className="product-container">
      {products.map((product, key) => {
        return (
          <div className=" mx-5 p-3  product-cart" key={key}>
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/" + product.img)}
                alt=""
              />
            </div>
            <div className="product-item-details">
              <h5>
                <a href="#"></a>
                {product.name}
              </h5>
              <p className="product-price">${product.price}</p>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

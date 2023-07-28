import React from "react";
import "./_products.scss";

const Products = () => {
  const products = [
    { name: "Jacket", price: 45, img: "shop-1.jpg" },
    { name: "Purse", price: 45, img: "shop-2.jpg" },
    { name: "Dress", price: 45, img: "shop-3.jpg" },
    { name: "Denim", price: 45, img: "shop-4.jpg" },
    { name: "Boots", price: 45, img: "shop-5.jpg" },
    { name: "Bag", price: 45, img: "shop-6.jpg" },
  ];
  return (
    <div className="product-container">
      {products.map((product, key) => {
        return (
          <div className=" mx-5 p-3  product-cart">
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

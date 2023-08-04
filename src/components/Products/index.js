import React, { useEffect } from "react";
import "./_products.scss";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../Redux/Product/productSlice";
import { getProducts } from "../../Redux/Product/productAction";
import { addCartItem } from "../../Redux/Cart/cartSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.pr.Products);
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();
  console.log("PRoduct NaV");
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  function addCart(itemCart) {
    const payload = { ...itemCart, quantity: 1 };
    console.log(payload);
    dispatch(addCartItem(payload));
  }
  return (
    <div className="product-container">
      {products.map((product, key) => {
        return (
          <div className=" mx-5 p-3  product-cart" key={key}>
            <div className="product-image-container">
              <Link to={"/productdetails"} state={product}>
                <img
                  src={require("../../assets/images/shop/" +
                    product.product_img)}
                  alt=""
                />
              </Link>
            </div>
            <div className="product-item-details">
              <h5>
                <Link to="/productdetails"> {product.product_name}</Link>
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
            <div className="my-3" onClick={() => addCart(product)}>
              <div className="cart-button">
                <div className="cart-icon-container">
                  <i className="fa fa-shopping-cart" />
                </div>
                <div className="cart-text-container">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

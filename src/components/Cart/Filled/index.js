import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_filled-cart.scss";
import {
  deleteCartItems,
  updateItemQuantity,
} from "../../../Redux/Cart/cartSlice";

export default function FilledCart() {
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();
  function updateQuantity(e, item, index) {
    let operator = e.target.innerText;
    // console.log(operator, index, item);
    const payload = {
      operator: operator,
      item,
      index,
    };
    dispatch(updateItemQuantity(payload));
  }
  function deleteHandler(item) {
    // console.log(item);
    dispatch(deleteCartItems(item));
  }
  return (
    <div>
      <div className="row my-5 fc-main-div">
        <div className="col-8 p-4">
          {cart.cartItems.map((item, key) => {
            console.log(item);
            return (
              <div key={key}>
                <div className="row cart-item-card">
                  <div className="col-4 cart-item-img">
                    <img
                      src={require(`../../../assets/images/shop/` +
                        item.product_img)}
                      alt="image"
                    />
                  </div>
                  <div className="col-8">
                    <div className="cart-item-details p-3">
                      <h3 className="cart-item-name">{item.product_name}</h3>

                      <div className="cart-item-price">
                        <span>{item.price}</span>
                      </div>
                    </div>
                    <div className="cart-item-rating">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                    </div>
                    <hr />
                    <div>
                      <div className="btn-group">
                        <div
                          className="btn btn-outline-dark"
                          onClick={(e) => updateQuantity(e, item, key)}
                        >
                          +
                        </div>
                        <div className="px-2 my-2">{item.quantity}</div>
                        <div
                          className="btn btn-outline-dark"
                          onClick={(e) => updateQuantity(e, item, key)}
                        >
                          -
                        </div>
                        <div
                          className="btn btn-outline-danger mx-4 "
                          onClick={() => deleteHandler(item)}
                        >
                          <span>
                            <i className="fa fa-trash mx-2"></i> Remove Items
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 px-3 py-4 my-4 cart-summary">
          <h2 className="mb-5 mt-2">Summery</h2>
          <div>
            <span>Cart Total: $ {cart.totalItemsPrice}</span>
            <span>Shipping charges :free</span>
            <hr />
            <span className="summary-total">Total:${cart.totalItemsPrice}</span>
            <hr />
          </div>
          <div className="btn btn-outline-dark mb-4 mt-1 w-100">CheckOut</div>
        </div>
      </div>
    </div>
  );
}

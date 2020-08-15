import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import {
  clearItemFromCart,
  removeItemFromCart,
  addToCart,
} from "../../redux/cart/cart.actions";

const CartItem = ({
  item,
  clearItemFromCart,
  removeItemFromCart,
  addToCart,
}) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);

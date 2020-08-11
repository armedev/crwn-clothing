import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./checkout.styles.scss";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CustomButton from "../../components/custom-button/custom-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const checkoutPage = ({ cartItems, history, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-items">
        {cartItems.length ? (
          cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
        ) : (
          <div className="empty">
            <span className="empty-message">No Items In The Cart</span>
            <CustomButton onClick={() => history.push("/shop")}>
              Go To Shop
            </CustomButton>
          </div>
        )}
      </div>
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="warning">
        This Is A Test Stripe Integration payment please use the following test
        card to see the flow <br />
        cardNO: 4242 4242 4242 4242 EXP: 01/30 CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(checkoutPage));

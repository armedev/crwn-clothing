import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HEpnUH4erw0dYck6XEGCwv5PwXDfxOJGKWaswheqgFvJc1aJB2r3X4GX3V0J9FyqlBxnLzl3eWX5DvdDS9VWIRU00YISmasbs";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("PATMENT SUCCESSFULL : ", response);
      })
      .catch((error) => {
        console.log("payment failed : ", error);
        alert("PAYMENT FAILED");
      });
  };

  return (
    <div>
      <StripeCheckout
        label="Pay-Now"
        name="CRWN_CLOTHING"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total is $${price}.`}
        amount={priceForStripe}
        panelLabel="Pay-Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;

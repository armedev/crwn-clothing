import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HEpnUH4erw0dYck6XEGCwv5PwXDfxOJGKWaswheqgFvJc1aJB2r3X4GX3V0J9FyqlBxnLzl3eWX5DvdDS9VWIRU00YISmasbs";

  const onToken = (token) => {
    console.log(token);
    alert("PAYMENT SUCCESSFULL");
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

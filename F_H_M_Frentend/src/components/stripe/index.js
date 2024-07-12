import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const StripeWrapper = ({ children }) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;

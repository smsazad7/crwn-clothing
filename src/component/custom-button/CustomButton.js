import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...outherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...outherProps}
  >
    {children}
  </button>
);

export default CustomButton;

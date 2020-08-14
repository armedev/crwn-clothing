import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = ({
  displayName,
  email,
  password,
  confirmPassword,
  handleChange,
  handleSubmit,
}) => (
  <div className="sign-up">
    <h2 className="title">I Don`t Have A Account</h2>
    <span>Sign-Up With Your Email and Password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="displayName"
        required
        label="Name"
        value={displayName}
        handleChange={handleChange}
      />
      <FormInput
        type="email"
        name="email"
        required
        value={email}
        handleChange={handleChange}
        label="Email"
      />
      <FormInput
        type="password"
        name="password"
        required
        value={password}
        handleChange={handleChange}
        label="passoword"
      />
      <FormInput
        type="password"
        name="confirmPassword"
        required
        value={confirmPassword}
        handleChange={handleChange}
        label="Confirm Password"
      />
      <CustomButton type="submit">Sign Up</CustomButton>
    </form>
  </div>
);

export default SignUp;

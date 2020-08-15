import React from "react";

import "./sign-in.styles.scss";
import { ReactComponent as Google } from "../../assets/google.svg";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = ({
  email,
  password,
  handleChange,
  handleSubmit,
  signInWithGoogle,
}) => {
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span> Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
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
          label="Password"
        />
        <span className="container">
          <CustomButton type="submit">Sign In</CustomButton>
          <span className="or-span">OR</span>
          <Google className="google-img" onClick={signInWithGoogle} />
        </span>
      </form>
    </div>
  );
};

export default SignIn;

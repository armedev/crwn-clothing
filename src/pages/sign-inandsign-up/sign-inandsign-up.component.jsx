import React from "react";

import "./sign-inandsign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { Redirect } from "react-router-dom";

const SignInandSignUpPage = ({ currentUser }) => {
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInandSignUpPage;

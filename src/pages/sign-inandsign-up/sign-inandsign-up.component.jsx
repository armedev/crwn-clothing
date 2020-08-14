import React from "react";

import "./sign-inandsign-up.styles.scss";

import SignInContainer from "../../components/sign-in/sign-in.container";
import SignUpContainer from "../../components/sign-up/sign-up.container";

const SignInandSignUpPage = ({ setIsLoading }) => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInContainer setIsLoading={setIsLoading} />
      <SignUpContainer setIsLoading={setIsLoading} />
    </div>
  );
};

export default SignInandSignUpPage;

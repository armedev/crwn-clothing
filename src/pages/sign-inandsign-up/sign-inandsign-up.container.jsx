import React, { useState } from "react";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import SignInAndSignUpPage from "./sign-inandsign-up.component";

const SignInAndSignUpPageWithSpinner = WithSpinner(SignInAndSignUpPage);

const SignInAndSignUpPageContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SignInAndSignUpPageWithSpinner
      isLoading={isLoading} //for withspinner
      setIsLoading={setIsLoading} // for sign in and sign up page
    />
  );
};

export default SignInAndSignUpPageContainer;

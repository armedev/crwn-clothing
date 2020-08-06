import React from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import "./sign-inandsign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SignInandSignUpPage);

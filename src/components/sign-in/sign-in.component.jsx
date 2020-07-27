import React from "react";

import "./sign-in.styles.scss";
import { ReactComponent as Google } from "../../assets/google.svg";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span> Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

export default SignIn;

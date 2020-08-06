import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password === confirmPassword && password.length >= 6) {
      this.setState(
        {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        async () => {
          try {
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
            await createUserProfileDocument(user, { displayName });
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
        }
      );
    } else {
      this.setState({
        password: "",
        confirmPassword: "",
      });

      alert(
        password !== confirmPassword
          ? "password don`t match"
          : "password length should be greater than 6"
      );
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I Don`t Have A Account</h2>
        <span>Sign-Up With Your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            required
            label="Name"
            value={this.state.displayName}
            handleChange={this.handleChange}
          />
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
            label="passoword"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            required
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

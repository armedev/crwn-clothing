import React, { useState } from "react";
import SignIn from "./sign-in.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignInContainer = ({ setIsLoading }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setCredentials({ email: "", password: "" });
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignIn
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      signInWithGoogle={signInWithGoogle}
      {...userCredentials}
    />
  );
};

export default SignInContainer;

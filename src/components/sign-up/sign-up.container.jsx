import React, { useState } from "react";
import SingUp from "./sign-up.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUpContainer = ({ setIsLoading }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password === confirmPassword && password.length >= 6) {
      const signUp = async () => {
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
          await createUserProfileDocument(user, { displayName });
          setUserCredentials({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } catch (error) {
          console.log(error);
          alert(error.message);
        }
        setIsLoading(false);
      };
      signUp();
    } else {
      setUserCredentials({
        ...userCredentials,
        password: "",
        confirmPassword: "",
      });
      setIsLoading(false);
      alert(
        password !== confirmPassword
          ? "password don`t match"
          : "password length should be greater than 6"
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SingUp
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...userCredentials}
    />
  );
};

export default SignUpContainer;

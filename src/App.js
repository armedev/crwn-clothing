import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component.jsx";
import Shop from "./pages/shoppage/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInandSignUpPage from "./pages/sign-inandsign-up/sign-inandsign-up.component.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage.component.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shoppage/Shop";
import Header from "./component/header/Header";
import SignInandSignUp from "./pages/sign-in-and-sign-up/SignInandSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInandSignUp} />
      </Switch>
    </div>
  );
}

export default App;

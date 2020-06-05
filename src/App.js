import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import Shop from "./pages/shoppage/Shop";
import Header from "./component/header/Header";
import SignInandSignUp from "./pages/sign-in-and-sign-up/SignInandSignUp";
import { auth } from "./firebase/firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currenUser: null,
    };
  }
  unsubscribFormAuth = null;
  componentDidMount() {
    this.unsubscribFormAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currenUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribFormAuth();
  }

  render() {
    return (
      <div>
        <Header currenUser={this.state.currenUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInandSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

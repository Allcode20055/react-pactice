import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class CONDITIONAL__RENDARING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsLogin: false,
    };
  }

  render() {
    const { IsLogin } = this.state;

    // return <div>{IsLogin && <HomePage />}</div>;
    return <div>{IsLogin ? <HomePage /> : <LoginPage />}</div>;
  }
}
export default CONDITIONAL__RENDARING;

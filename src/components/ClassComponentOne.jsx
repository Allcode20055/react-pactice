import React, { Component } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

class ClassComponentOne extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h2>{this.props.desc}</h2>
        <span>
          <FaFacebook />
          <FaYoutube />
        </span>
      </div>
    );
  }
}

export default ClassComponentOne;

import React, { Component } from "react";

export default class EVENT__HANDEL extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
  }

  HandelOnChange = (e) => {
    this.setState(
      {
        changeValue: e.target.value,
      },
      () => {
        console.log(this.state.changeValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.HandelOnChange} />
        <p>{this.state.changeValue}</p>
      </div>
    );
  }
}

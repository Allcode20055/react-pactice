import React, { Component } from "react";

export default class Bind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.HandelChange = this.HandelChange.bind(this);
  }
  HandelChange() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.HandelChange}>inCrement</button>
      </div>
    );
  }
}

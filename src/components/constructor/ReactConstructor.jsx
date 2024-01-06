import React, { Component } from "react";

class ReactConstructore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>
          <h2>{count}</h2>
          <button onClick={this.Increment} disabled={count == 5 ? true : false}>
            +
          </button>
          <button onClick={this.Decrement} disabled={count == 0 ? true : false}>
            -
          </button>
        </div>
      </div>
    );
  }
}
export default ReactConstructore;

import React, { PureComponent } from "react";

export class countClass extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 100,
    };
  }
  increment(num) {
    this.setState({
      counter: this.state.counter + num,
    });
  }
  decrement(num) {
    this.setState({
      counter: this.state.counter - num,
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>countClass</h2>
        <div>当前计数：{counter}</div>
        <button onClick={(e) => this.increment(1)}>+1</button>
        <button onClick={(e) => this.decrement(1)}>-1</button>
      </div>
    );
  }
}

export default countClass;

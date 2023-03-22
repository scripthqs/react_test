import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();
    console.log("1.constructor生命周期");
    this.state = {
      message: "Hello LifeCycle",
    };
  }
  changeMsg() {
    this.setState({
      message: "Hello Click",
    });
  }

  render() {
    console.log("2.render生命周期");
    const { message } = this.state;
    return (
      <div>
        <div>{message}</div>
        <button onClick={(e) => this.changeMsg()}>修改</button>
      </div>
    );
  }
  componentDidMount(prevProps, prevState, snapshot) {
    console.log("3.componentDidMount生命周期");
    console.log(prevProps, prevState, snapshot);
  }
  componentDidUpdate() {
    console.log("4.componentDidUpdate生命周期");
  }
  componentWillUnmount() {
    console.log("5.componentWillUnmount生命周期");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate生命周期");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate生命周期");
    return {
      scrollPosition: 1000,
    };
  }
}
export default LifeCycle;

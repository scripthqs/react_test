import React, { Component } from "react";

export class SetState extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello State",
    };
  }
  changeState() {
    // this.setState({
    //   message: "Hello State1",
    // });
    // this.setState((state, props) => {
    //   console.log("line15", state, props);
    //   return {
    //     message: "Hello State2",
    //   };
    // });
    // this.setState({ message: "Hello State3" }, () => {
    //   console.log("line21", this.state.message);
    // });
    // console.log("line23:", this.state.message);
    setTimeout(()=>{
      this.setState({
        message:''
      })
    })
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>SetState</h2>
        <div>{message}</div>
        <button onClick={(e) => this.changeState(e)}>点击修改state</button>
      </div>
    );
  }
}

export default SetState;

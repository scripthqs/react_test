import React from "react";
import Home from "./page/Home";
import Profile from "./page/Profile";
import About from "./page/About";

import "./style.css";
import store from "./store";

//编写一个组件
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>App counter:{counter}</h2>
        <div className="page">
          <Home></Home>
          <Profile></Profile>
          <About></About>
        </div>
      </div>
    );
  }
}

export default App;

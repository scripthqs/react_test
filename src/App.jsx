import React from "react";
import HelloReact from "./Components/HelloReact";
import ClassCpn from "./01_类组件和函数组件/ClassCpn";
import FunCpn from "./01_类组件和函数组件/FunctionCpn";
import LifeCycle from "./02_组件的生命周期函数/LifeCycle";
import Page from "./03_组件的通信/Page";
import ReactSlot from "./04_组件的插槽/ReactSlot";
//编写一个组件
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      show: true,
    };
  }
  changeShow() {
    this.setState({
      show: false,
    });
  }
  render() {
    const { message, show } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <HelloReact />
        <ClassCpn />
        <FunCpn />
        {show && <LifeCycle />}
        <button onClick={(e) => this.changeShow()}>移除</button>
        <Page></Page>
        <ReactSlot></ReactSlot>
      </div>
    );
  }
}

export default App;

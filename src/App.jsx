import React from "react";
import HelloReact from "./components/HelloReact";
import ClassCpn from "./01_类组件和函数组件/ClassCpn";
import FunCpn from "./01_类组件和函数组件/FunctionCpn";
import LifeCycle from "./02_组件的生命周期函数/LifeCycle";
import Page from "./03_组件的通信/Page";
import ReactSlot from "./04_组件的插槽/ReactSlot";
import SetState from "./05_setState的使用/SetState";
import ReactTransition from "./react_transition/ReactTransition";

import ReactStyle from "./reactCss/01_内联样式的CSS/ReactStyle";
import ReactCss from "./reactCss/02_普通的CSS写法/ReactCss";
import ModulePage from "./reactCss/03_CSS_Modules/ModulePage";
import CssLess from "./reactCss/04_CSS_less/CssLess";
import StyledComponents from "./reactCss/05_css_in_js/StyledComponents";
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
        <StyledComponents></StyledComponents>
        <hr />
        <CssLess></CssLess>
        <hr />
        <ModulePage></ModulePage>
        <hr />
        <ReactCss></ReactCss>
        <hr />
        <ReactStyle></ReactStyle>
        <hr />
        <ReactTransition></ReactTransition>
        <h2>{message}</h2>
        <HelloReact />
        <ClassCpn />
        <FunCpn />
        {show && <LifeCycle />}
        <button onClick={(e) => this.changeShow()}>移除</button>
        <Page></Page>
        <ReactSlot></ReactSlot>
        <SetState></SetState>
      </div>
    );
  }
}

export default App;

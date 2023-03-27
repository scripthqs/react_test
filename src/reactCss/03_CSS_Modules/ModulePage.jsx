import React, { PureComponent } from "react";
import Home from "./home/Home";
import mpStyle from "./ModulePage.module.css";
export default class ModulePage extends PureComponent {
  render() {
    return (
      <div>
        <div className={mpStyle.title}>ModulePage</div>
        <div className={mpStyle.content}>ModulePage的内容</div>
        <Home></Home>
      </div>
    );
  }
}

import React, { PureComponent } from "react";
import Home from "./home/Home";
import Hello from "./hello/Hello";

import "./ReactCss.css";

export default class ReactCss extends PureComponent {
  render() {
    return (
      <div>
        <h2>ReactCss</h2>
        <div className="title">标题</div>
        <div className="content">内容</div>
        <Home></Home>
        <Hello></Hello>
      </div>
    );
  }
}

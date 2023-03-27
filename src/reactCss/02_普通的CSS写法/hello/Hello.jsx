import React, { PureComponent } from "react";
// import "./hello.css";
export default class Hello extends PureComponent {
  render() {
    return (
      <div>
        <div className="title">Hello</div>
        <div className="content">内容</div>
      </div>
    );
  }
}

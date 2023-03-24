import React, { Component } from "react";
import InfoContext from "../context/InfoContext";

export class Top extends Component {
  render() {
    // 4.第四步操作: 获取数据, 并且使用数据
    console.log(this.context, "this.context");
    const { color, size, id, name } = this.context;
    return (
      <div>
        <h3>Top</h3>
        <div>{color}</div>
        <div>{size}</div>
        <div>{id}</div>
        <div>{name}</div>
      </div>
    );
  }
}

// 3.第三步操作: 设置组件的contextType为某一个Context
Top.contextType = InfoContext;

export default Top;

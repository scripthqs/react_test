import React, { PureComponent } from "react";
export default class ReactStyle extends PureComponent {
  constructor() {
    super();
    this.state = {
      fSize: 20,
    };
  }
  changeSize(e) {
    this.setState({
      fSize: 50,
    });
  }
  render() {
    const { fSize } = this.state;
    return (
      <div>
        <h2>ReactStyle</h2>
        <div style={{ color: "red", fontSize: "20px" }}>标题</div>
        <div style={{ color: "green", fontSize: `${fSize}px` }}>内容</div>
        <button onClick={(e) => this.changeSize(e)}>变大</button>
      </div>
    );
  }
}

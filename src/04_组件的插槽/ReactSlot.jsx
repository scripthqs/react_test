import React, { Component } from "react";
import ChildrenSlot from "./components/ChildrenSlot";
import PropsSlot from "./components/PropsSlot";
export class ReactSlot extends Component {
  render() {
    const btn = <button>按钮</button>;
    return (
      <div>
        <h2>ReactSlot</h2>
        {/* 1.使用children实现插槽 */}
        <ChildrenSlot>
          <div>使用children实现插槽</div>
          <div>哈哈</div>
        </ChildrenSlot>
        {/* 2.使用props实现插槽 */}
        <PropsSlot slotOne={<div>使用props实现插槽</div>} slotTwo={(e) => <div>{e}</div>} slotBtn={btn}></PropsSlot>
      </div>
    );
  }
}

export default ReactSlot;

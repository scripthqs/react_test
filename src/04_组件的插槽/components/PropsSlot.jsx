import React, { Component } from "react";

export class PropsSlot extends Component {
  render() {
    const { slotOne, slotTwo, slotBtn } = this.props;
    return (
      <div>
        <h3>PropsSlot</h3>
        <div>{slotOne}</div>
        <div>{slotTwo("666")}</div>
        <div>{slotBtn}</div>
      </div>
    );
  }
}

export default PropsSlot;

import React, { Component } from "react";
import PropTypes from "prop-types";
export class ChildrenSlot extends Component {
  render() {
    const { children } = this.props;
    console.log(children);
    return (
      <div>
        <h3>ChildrenSlot</h3>
        <div>{children}</div>
        <div>{children[0]}</div>
        <div>{children[1]}</div>
      </div>
    );
  }
}
//指定ChildrenSlot组件只能传一个children
// ChildrenSlot.propTypes = {
//   children: PropTypes.element,
// };

export default ChildrenSlot;

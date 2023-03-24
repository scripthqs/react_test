import React, { Component } from "react";
import Top from "./Top";
import TopFun from "./TopFun";
export class Header extends Component {
  render() {
    return (
      <div>
        <h2>Header</h2>
        <Top></Top>
        <TopFun></TopFun>
      </div>
    );
  }
}

export default Header;

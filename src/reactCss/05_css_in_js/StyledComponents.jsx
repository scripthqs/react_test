import React, { PureComponent } from "react";
import { AppWrapper } from "./style.js";
import classNames from "classnames";
export default class StyledComponents extends PureComponent {
  constructor() {
    super();
    this.state = {
      isbbb: true,
    };
  }
  render() {
    const { isbbb } = this.state;
    return (
      <AppWrapper color={"red"}>
        <div className="title">StyledComponents</div>
        <div className="content">StyledComponents内容</div>
        <div className={classNames("aaa")}>hello</div>
        <div className={classNames("aaa", { bbb: isbbb })}>hello classnames</div>
      </AppWrapper>
    );
  }
}

import React, { PureComponent } from "react";
import withRouter from "../hoc/withRouter";
export class HomeRanking extends PureComponent {
  render() {
    return (
      <div>
        <div>HomeRanking</div>
        <div>排行榜</div>
      </div>
    );
  }
}

export default withRouter(HomeRanking);

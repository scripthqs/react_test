import React, { PureComponent } from "react";
import withRouter from "../hoc/withRouter";
export class Detail extends PureComponent {
  render() {
    const { router } = this.props;
    const { params } = router;
    console.log(router, params, "params");
    return (
      <div>
        <h1>Detail</h1>
        <h2>id：{params.id}</h2>
      </div>
    );
  }
}

export default withRouter(Detail);

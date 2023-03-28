import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchInfoAction } from "../store/actionCreators";
import axios from "axios";
export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home counter:0</h2>
        <button>+1</button>
        <button>+5</button>
        <button>+10</button>
      </div>
    );
  }
  async componentDidMount() {
    let res = await axios.get("https://v.api.aa1.cn/api/yiyan/index.php");
    console.log(res.data);
    const info = res.data;
    this.props.changeInfo(info);
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInfo: () => dispatch(fetchInfoAction()),
});

export default connect(null, mapDispatchToProps)(Home);

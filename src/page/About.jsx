import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../store/actionCreators";

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log("add");
      this.props.addNumber(num);
    } else {
      console.log("sub");
      this.props.subNumber(num);
    }
  }
  render() {
    const { counter, info } = this.props;
    console.log(info);
    return (
      <div>
        <div className="title">About{counter}</div>
        <div>{info}</div>
        <button onClick={(e) => this.calcNumber(1, true)}>+1</button>
        <button onClick={(e) => this.calcNumber(5, true)}>+5</button>
        <button onClick={(e) => this.calcNumber(5, false)}>-5</button>
        <button onClick={(e) => this.calcNumber(10, false)}>-10</button>
      </div>
    );
  }
}
// connect的返回值是一个高阶函数
// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }
const mapStateToProps = (state) => ({
  counter: state.counter,
  info: state.info,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(incrementAction(num)),
  subNumber: (num) => dispatch(decrementAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

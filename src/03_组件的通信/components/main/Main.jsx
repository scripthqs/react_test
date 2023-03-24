import React, { Component } from "react";
import PropTypes from "prop-types";
import "./main.css";
export class Main extends Component {
  // constructor(props) {
  //   console.log(props);
  //   super(props);
  //   // this.props = props//内部已经保存
  // }
  clickBtn() {
    console.log("changeText111");
    this.props.clickBtn();
  }
  render() {
    const { title, text, lists } = this.props;
    return (
      <div>
        <h3>Main</h3>
        <h4>{title}</h4>
        <div className="mainText">{text}</div>
        <button onClick={(e) => this.clickBtn(e)}>点击切换</button>
        <ul>
          {lists.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

//传入的props类型进行验证
Main.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  lists: PropTypes.array,
};

//传入的props的默认值
Main.defaultProps = {
  title: "默认标题",
};

export default Main;

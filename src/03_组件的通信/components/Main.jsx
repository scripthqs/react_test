import React, { Component } from "react";

export class Main extends Component {
  // constructor(props) {
  //   console.log(props);
  //   super(props);
  //   // this.props = props//内部已经保存
  // }
  render() {
    const { title, text, lists } = this.props;
    return (
      <div>
        <h3>Main</h3>
        <h4>{title}</h4>
        <div>{text}</div>
        <ul>
          {lists.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Main;

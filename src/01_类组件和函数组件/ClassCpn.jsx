import React from "react";

//1.类组件
class ClassCpn extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "React Class Component",
    };
  }
  render() {
    const { message } = this.state;
    return <div>{message}</div>;
    //1.react元素
    // return <div>react</div>;
    //2.数组或fragments
    // return [1, 2, 3, 4, 5];
    //3.字符串或数字
    // return 123;
    //4.boolean null undefined
    // return true;
  }
}
export default ClassCpn;

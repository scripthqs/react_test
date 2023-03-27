import React from "react";

//编写一个组件
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      show: true,
    };
  }
  changeShow() {
    this.setState({
      show: false,
    });
  }
  render() {
    const { message, show } = this.state;
    return (
      <div>
        <div>app</div>
        <div>{message}</div>
        <div>{show}</div>
      </div>
    );
  }
}

export default App;

import React from "react";

//编写一个组件
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
      </div>
    );
  }
}

export default App;

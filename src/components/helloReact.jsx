import React from "react";
class HelloReact extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
    };
  }
  render() {
    const { message } = this.state;
    return <div>{message}</div>;
  }
}
export default HelloReact;

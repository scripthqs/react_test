import React, { PureComponent } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from "axios";

export class Page extends PureComponent {
  constructor() {
    super();
    this.state = {
      text: "",
      lists: ["哈哈", "呵呵", "嘻嘻", "嘿嘿"],
    };
  }
  render() {
    const { text, lists } = this.state;
    return (
      <div>
        <h2>Page</h2>
        <Header></Header>
        <Main title="标题" text={text} lists={lists}></Main>
        <Footer></Footer>
      </div>
    );
  }
  async componentDidMount() {
    let res = await axios.get("https://api.wrdan.com/hitokoto");
    console.log(res);
    this.setState({
      text: res?.data?.text,
    });
  }
}

export default Page;

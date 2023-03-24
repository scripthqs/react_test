import React, { PureComponent } from "react";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import axios from "axios";
import InfoContext from "./context/InfoContext";
export class Page extends PureComponent {
  constructor() {
    super();
    this.state = {
      text: "",
      lists: ["哈哈", "呵呵", "嘻嘻", "嘿嘿"],
      info: { id: "999", name: "pageInfo" },
    };
  }
  changeText() {
    console.log("changeTextPage");
    this.componentDidMount();
  }
  render() {
    const { text, lists, info } = this.state;
    return (
      <div>
        <h2>Page</h2>
        {/* <Header {...info}></Header> */}
        {/* 2.第二步操作: 通过ThemeContext中Provider中value属性为后代提供数据 */}
        <InfoContext.Provider value={{ color: "red", size: "30", ...info }}>
          <Header></Header>
        </InfoContext.Provider>
        <Main text={text} lists={lists} clickBtn={(e) => this.changeText(e)}></Main>
        <Footer></Footer>
      </div>
    );
  }
  async componentDidMount() {
    // fetch("https://api.wrdan.com/hitokoto")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     this.text = data.text;
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    let res = await axios.get("https://api.wrdan.com/hitokoto");
    console.log(res);
    this.setState({
      text: res?.data?.text,
    });
  }
}

export default Page;

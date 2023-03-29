import React, { PureComponent } from "react";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import HelloMsg from "./components/HelloMsg";

import UseEffect from "./02_useEffect/UseEffect";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <UseEffect></UseEffect>
        <hr />
        <HelloMsg></HelloMsg>
        <hr />
        <Counter></Counter>
        <hr />
        <Hello></Hello>
      </div>
    );
  }
}

export default App;

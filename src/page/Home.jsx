import React, { PureComponent } from "react";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home counter:0</h2>
        <button>+1</button>
        <button>+5</button>
        <button>+10</button>
      </div>
    );
  }
}

export default Home;

import React, { PureComponent } from "react";

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile counter:0</h2>
        <button>+1</button>
        <button>+5</button>
        <button>+10</button>
      </div>
    );
  }
}

export default Profile;

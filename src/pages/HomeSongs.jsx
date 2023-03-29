import React, { PureComponent } from "react";
import { withRouter } from "../hoc";
export class HomeSongs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        { id: "111", name: "歌曲1" },
        { id: "222", name: "歌曲2" },
        { id: "333", name: "歌曲3" },
        { id: "444", name: "歌曲4" },
      ],
    };
  }
  navigateToDetail(id) {
    console.log(id);
    const { navigate } = this.props.router;
    navigate("/detail/" + id);
  }
  render() {
    const { songs } = this.state;
    return (
      <div>
        <h2>HomeSongs</h2>
        <ul>
          {songs.map((item) => {
            return (
              <li key={item.id} onClick={(e) => this.navigateToDetail(item.id)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeSongs);

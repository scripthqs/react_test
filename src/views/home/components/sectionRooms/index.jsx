import PropTypes from "prop-types";
import React, { memo } from "react";

import RoomItem from "../roomItem";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;

  return (
    <RoomsWrapper>
      {roomList.slice(0, 8)?.map((item) => {
        return <RoomItem itemWidth={itemWidth} itemData={item} key={item.id} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;

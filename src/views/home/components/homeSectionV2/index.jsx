import SectionHeader from "../sectionHeader";
import SectionRooms from "../sectionRooms";
import SectionFooter from "../sectionFooter";
import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionV1Wrapper } from "./style";
import SectionTabs from "../sectionTabs";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;

  console.log(infoData);

  /** 定义内部的state */
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);

  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%" />
      <SectionFooter name={name} />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;

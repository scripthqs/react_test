import ScrollView from "@/components/scrollView";
import LongforItem from "./longforItem";
import SectionHeader from "../sectionHeader";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  console.log(infoData);
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;

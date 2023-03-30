import React, { memo } from "react";
import HeaderCenter from "./headerCenter";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";
import { HeaderWrapper } from "./style";
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
});

export default AppHeader;

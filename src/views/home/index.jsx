import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/homeBanner";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "./components/sectionHeader";
import SectionRooms from "./components/sectionRooms";
const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>

      <div className="content">
        <div className="goodPrice">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;

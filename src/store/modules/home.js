import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 获取home数据
// export const fetchHomeDataAction = createAsyncThunk("fetchData", async (payload) => {
//   const res = await getHomeGoodPriceData();
//   console.log(res);
//   return res;
// });

export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res));
  });
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res));
  });
  getHomeDiscountData().then((res) => {
    console.log(res);
    dispatch(changeDiscountInfoAction(res));
  });
  getHomeHotRecommendData().then((res) => {
    dispatch(changeRecommendInfoAction(res));
  });
  getHomeLongforData().then((res) => {
    dispatch(changeLongforInfoAction(res));
  });
  getHomePlusData().then((res) => {
    dispatch(changePlusInfoAction(res));
  });
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;

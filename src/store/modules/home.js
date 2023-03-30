import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 获取home数据
export const fetchHomeDataAction = createAsyncThunk("fetchData", async (payload) => {
  const res = await getHomeGoodPriceData();
  console.log(res);
  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;

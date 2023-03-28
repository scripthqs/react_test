import axios from "axios";
// const axios = require("axios");

const { CHANGE_NAME, CHANGE_INFO, INCREMENT, DECREMENT } = require("./constants");
export const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
});
export const changeInfoAction = (info) => ({
  type: CHANGE_INFO,
  info,
});

export const incrementAction = (num) => ({
  type: INCREMENT,
  num,
});
export const decrementAction = (num) => ({
  type: DECREMENT,
  num,
});

export const fetchInfoAction = () => {
  return async (dispatch, getState) => {
    let res = await axios.get("https://v.api.aa1.cn/api/yiyan/index.php");
    console.log(res.data);
    const info = res.data;
    dispatch(changeInfoAction(info));
  };
};

// module.exports = {
//   changeNameAction,
//   changeInfoAction,
//   incrementAction,
//   decrementAction,
//   fetchInfoAction,
// };

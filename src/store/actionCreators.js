import axios from "axios";
const { CHANGE_NAME, CHANGE_INFO, INCREMENT, DECREMENT } = require("./constants");
const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
});
const changeInfoAction = (info) => ({
  type: CHANGE_INFO,
  info,
});

const incrementAction = (num) => ({
  type: INCREMENT,
  num,
});
const decrementAction = (num) => ({
  type: DECREMENT,
  num,
});

// const fetchInfoAction = () => {
//   return async (dispatch, getState) => {
//     let res = await axios.get("https://v.api.aa1.cn/api/yiyan/index.php");
//     console.log(res.data);
//     const info = res.data;
//     dispatch(changeInfoAction(info));
//   };
// };

module.exports = {
  changeNameAction,
  changeInfoAction,
  incrementAction,
  decrementAction,
  // fetchInfoAction,
};

const { CHANGE_NAME, CHANGE_INFO, INCREMENT, DECREMENT } = require("./constants");

// 初始化的数据
const initialState = {
  name: "",
  counter: 100,
  info: 11,
};

function reducer(state = initialState, action) {
  // console.log("reducer:", state, action);
  switch (action.type) {
    case CHANGE_INFO:
      return { ...state, info: action.info };
    case INCREMENT:
      return { ...state, counter: state.counter + action.num };
    case DECREMENT:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

module.exports = reducer;

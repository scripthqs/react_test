const { CHANGE_NAME, INCREMENT, DECREMENT } = require("./constants");

// 初始化的数据
const initialState = {
  counter: 100,
};

function reducer(state = initialState, action) {
  // console.log("reducer:", state, action);
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.num };
    case DECREMENT:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

module.exports = reducer;

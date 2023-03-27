const { CHANGE_NAME, INCREMENT, DECREMENT } = require("./constants");

const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
});

const incrementAction = (num) => ({
  type: INCREMENT,
  num,
});
const decrementAction = (num) => ({
  type: DECREMENT,
  num,
});

module.exports = {
  changeNameAction,
  incrementAction,
  decrementAction,
};

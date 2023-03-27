const store = require("./store");

console.log(store.getState());

//修改store的数据必须通过action

const nameAction = { type: "changeName", name: "world" };
const incrementAction = { type: "INCREMENT", num: 10 };
const decrementAction = { type: "DECREMENT", num: 20 };

store.dispatch(nameAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);

console.log(store.getState());

// store.dispatch(incrementAction);

const store = require("./store");
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState());
});

//修改store的数据必须通过action
const nameAction = { type: "changeName", name: "world" };
const incrementAction = { type: "INCREMENT", num: 10 };
const decrementAction = { type: "DECREMENT", num: 20 };
// unsubscribe();
store.dispatch(nameAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);

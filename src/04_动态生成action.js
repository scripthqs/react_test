const store = require("./store");
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState());
});

//actionCreators:帮助我们创建action
const changeNameAction = (name) => ({
  type: "changeName",
  name,
});

//修改store的数据必须通过action
const nameAction1 = { type: "changeName", name: "world1" };
const nameAction2 = { type: "changeName", name: "world2" };

// unsubscribe();
store.dispatch(nameAction1);
store.dispatch(nameAction2);
store.dispatch(changeNameAction("world3"));
store.dispatch(changeNameAction("world4"));

// const incrementAction = { type: "INCREMENT", num: 10 };
// const decrementAction = { type: "DECREMENT", num: 20 };
// store.dispatch(incrementAction);
// store.dispatch(decrementAction);

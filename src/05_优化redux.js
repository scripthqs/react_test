const store = require("./store");
const { changeNameAction, incrementAction, decrementAction } = require("./store/actionCreators");
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState());
});

//修改store的数据必须通过action

// unsubscribe();

store.dispatch(changeNameAction("world3"));
store.dispatch(changeNameAction("world4"));
store.dispatch(incrementAction(10));
store.dispatch(decrementAction(20));

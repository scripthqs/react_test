import React, { memo, useState } from "react";

const countHook = memo((props) => {
  // let counter = 100;
  // const arr = useState(100);
  const [counter, setCounter] = useState(100);
  return (
    <div>
      <h2>countHook</h2>
      {/* <div>当前计数{arr[0]}</div> */}
      <div>当前计数{counter}</div>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
    </div>
  );
});

export default countHook;

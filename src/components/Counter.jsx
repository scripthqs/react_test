import React, { memo } from "react";
import CounterClass from "./CountClass";
import CountHook from "./CountHook";

const Counter = memo(() => {
  return (
    <div>
      <h2>Counter</h2>
      <hr />
      <CounterClass></CounterClass>
      <hr />
      <CountHook></CountHook>
    </div>
  );
});

export default Counter;

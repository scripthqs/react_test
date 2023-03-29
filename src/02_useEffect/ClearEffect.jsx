import React, { memo, useState, useEffect } from "react";

const ClearEffect = memo(() => {
  const [count, setCount] = useState(100);
  useEffect(() => {
    document.title = count;
    // 1.监听事件
    // const unubscribe = store.subscribe(() => {
    // })
    // function foo() {
    // }
    // eventBus.on("abc", foo)
    console.log("监听redux中数据变化, 监听eventBus中的事件");
    // 返回值: 回调函数 => 组件被重新渲染或者组件卸载的时候执行
    return () => {
      console.log("取消监听redux中数据变化, 取消监听eventBus中的事件");
    };
  });
  return (
    <div>
      <div>ClearEffect</div>
      <h2>计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default ClearEffect;

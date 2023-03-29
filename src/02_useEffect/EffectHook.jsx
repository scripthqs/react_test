import React, { memo, useState, useEffect } from "react";

const EffectHook = memo(() => {
  const [count, setCount] = useState(100);
  useEffect(() => {
    // 当前传入的回调函数会在组件被渲染完成后, 自动执行
    // 网络请求/DOM操作(修改标题)/事件监听
    document.title = count;
  });
  return (
    <div>
      <div>EffectHook</div>
      <h2>计数: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default EffectHook;

import React, { memo, useState } from "react";

const HelloMsg = memo(() => {
  const [message, setMessage] = useState("Hello World");
  function changeMessage() {
    setMessage("你好,世界");
  }
  return (
    <div>
      <h2>HelloMsg: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  );
});

export default HelloMsg;

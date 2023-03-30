import React, { memo, useState, useEffect } from "react";
import request from "@/services";
const Home = memo(() => {
  const [highScore, setHighScore] = useState({});
  useEffect(() => {
    request.get({ url: "/home/highScore" }).then((res) => {
      console.log(res);
      setHighScore(res);
    });
  }, []);
  return (
    <div>
      <div>Home</div>
      <div>{highScore.title}</div>
      <ul>
        {highScore?.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;

import React, { PureComponent } from "react";

import { Routes, Route, Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import HomeRanking from "./pages/HomeRanking";
import HomeRecommend from "./pages/HomeRecommend";
import HomeSongs from "./pages/HomeSongs";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
import "./style.css";
export function App(props) {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }
  return (
    <div className="App">
      <h1>App</h1>
      <div className="header">
        <div>header</div>
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/login">登录</Link>
        <button onClick={(e) => navigateTo("/category")}>分类</button>
        <span onClick={(e) => navigateTo("/order")}>订单</span>
        {/* <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink> */}
      </div>
      <div className="content">
        {/* 映射关系：path=>Component */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home></Home>}>
            <Route path="/home" element={<Navigate to="/home/recommend" />}></Route>
            <Route path="/home/recommend" element={<HomeRecommend></HomeRecommend>}></Route>
            <Route path="/home/ranking" element={<HomeRanking></HomeRanking>}></Route>
            <Route path="/home/songmenu" element={<HomeSongs />} />
          </Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/category" element={<Category></Category>} />
          <Route path="/order" element={<Order></Order>} />
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;

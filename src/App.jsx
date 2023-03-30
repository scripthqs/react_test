import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/appFooter";
import AppHeader from "./components/appHeader";
import routes from "./router";
const App = memo(() => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;

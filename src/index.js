import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
//编写React代码，并且通过React渲染出对应的内容
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

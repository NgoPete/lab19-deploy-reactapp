import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/Store";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

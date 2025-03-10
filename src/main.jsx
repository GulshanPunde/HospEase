import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   <BrowserRouter>
      <App  />
    </BrowserRouter>
  </Provider>
);

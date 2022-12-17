import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import * as get from "./api/get";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App api={{ get }} >
  </React.StrictMode>
);

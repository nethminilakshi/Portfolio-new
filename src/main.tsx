import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore: side-effect import of CSS module without type declarations
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ListProvider } from "./Context/ListContext";

ReactDOM.render(
  <ListProvider>
    <App />
  </ListProvider>,
  document.getElementById("root")
);

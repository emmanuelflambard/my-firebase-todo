import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";

import {} from "./firebase";

import "./styles.css";

const rootDiv = document.getElementById("root");

ReactDOM.render(
  <>
    <CssBaseline />
    <App />
  </>,
  rootDiv
);

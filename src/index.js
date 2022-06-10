import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthFunction from "functions/mainFunction.jsx"

if (window.localStorage.getItem("leaderboard") == null && window.localStorage.getItem("training") == null && window.localStorage.getItem("home") == null) {
  window.localStorage.setItem("leaderboard", "")
  window.localStorage.setItem("training", "")
  window.localStorage.setItem("home", "selected")

}

if (window.localStorage.getItem("leaderboardSUPERV") == null && window.localStorage.getItem("trainingSUPERV") == null && window.localStorage.getItem("homeSUPERV") == null) {
  window.localStorage.setItem("leaderboardSUPERV", "")
  window.localStorage.setItem("trainingSUPERV", "")
  window.localStorage.setItem("homeSUPERV", "selected")

}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App AuthFunction={AuthFunction} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
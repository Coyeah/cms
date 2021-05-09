import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Basic from "src/layouts/Basic";

import "src/common/global.css";
import "src/common/flex.css";

function App() {
  if (window.electron)
    return (
      <Router>
        <Basic />
      </Router>
    );
  else return null;
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

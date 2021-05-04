import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "components/App";
import reportWebVitals from "./reportWebVitals";
// redux setup
// root component contains provider and store
import Root from "root";
ReactDOM.render(
  <React.StrictMode>
    {/* into createStore we pass in list of reducers and initial state(currently empty object) */}
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

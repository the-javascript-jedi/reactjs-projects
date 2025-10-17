import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";
import "./MultiStepForm.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const MultiStepForm = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Form Wizzard</h1>
        <Router>
          <Pages />
        </Router>
      </div>
    </Provider>
  );
};

export default MultiStepForm;

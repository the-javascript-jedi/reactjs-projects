import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import reducer
import userReducer from "./features/userReducer";

// common store
const store = configureStore({
  // reducer - function that takes information about current state (previous value of state, and action we need to perform on the state) and returns back the new value of the state
  reducer: {
    user: userReducer,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import reducer
import userReducer from "./features/userReducer";
import themeReducer from "./features/themeReducer";

// common store
const store = configureStore({
  // reducer - function that takes information about current state (previous value of state, and action we need to perform on the state) and returns back the new value of the state
  //  @* Step 2 - Pass the Reducer to Store *@
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
ReactDOM.render(
  <React.StrictMode>
    {/* @* Step 1 *@ - Pass the store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

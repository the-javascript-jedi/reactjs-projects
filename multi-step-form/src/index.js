import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// reducer
import formReducer from "./features/formReducer";
// store
const store = configureStore({
  //  @* Step 2 - Pass the Reducer to Store *@
  reducer: {
    form: formReducer,
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

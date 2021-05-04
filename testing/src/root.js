import React from "react";
import { Provider } from "react-redux";
import reducers from "reducers";
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
const middleware = [];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const root = (props) => {
  return (
    <Provider store={store}>
      {/* {props.children} allows us to take component and wrap other components*/}
      {props.children}
    </Provider>
  );
};
export default root;

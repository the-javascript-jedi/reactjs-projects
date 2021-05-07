import React from "react";
import { Provider } from "react-redux";
//reduxPromise-used to handle asyncronous action creators, or action creators that try to make network requests
import reduxPromise from "redux-promise";
import reducers from "reducers";
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// we pass the initialState as props so it is easier for testing purposes
// we need to destructure the elements to get an initial state value if we directly set a initial state of props.initialState={} we will get an error during
// we pass empty object to initialState so that other tests will not get affected else initial state will be undefined
const Root = ({ initialState = {}, children }) => {
  const middleware = [reduxPromise];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return (
    <Provider store={store}>
      {/* {props.children} allows us to take component and wrap other components*/}
      {children}
    </Provider>
  );
};
export default Root;

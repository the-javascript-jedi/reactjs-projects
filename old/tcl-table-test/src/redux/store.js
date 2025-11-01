import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";
const middleware = [thunk];
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

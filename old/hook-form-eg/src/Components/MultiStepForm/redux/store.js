import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { formReducer } from "./reducers/formReducer";

// combine reducers
const reducer = combineReducers({
  formList: formReducer,
});

const initialState = {};
const middleware = [];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

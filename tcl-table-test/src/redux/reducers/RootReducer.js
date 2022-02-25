import { combineReducers } from "redux";
import { UserReducer } from "./formDataReducer";
const RootReducer = combineReducers({
  UserReducer: UserReducer,
});
export default RootReducer;

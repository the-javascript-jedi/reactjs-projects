import { createStore,applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store=createStore(
    // we pass the reducers, initial state is an empty object, all the necessary middlewares
    reducers,{},applyMiddleware(thunk)
)
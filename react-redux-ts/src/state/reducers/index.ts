import {combineReducers} from "redux";
import bankReducer from './bankReducer'

const reducers=combineReducers({
    bank:bankReducer
})

export default reducers;
//we export the type of state so we can specify the type of reducer
export type State=ReturnType<typeof reducers>
// we create a custom hook that will automatically give us access to all of our different action creators inside our component
//useDispatch get access to the dispatch function itself
//It is what allows us to dispatch an action into all of our different reducers.
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  // Bind to action is going to give us back an object that contains all the different action creators that we provided in as the first argument, but now whenever we call these bound action creators, the return value from them will be automatically taken and provided to dispatch.
  return bindActionCreators(actionCreators, dispatch);
  //{searchRepositories:dispatch(searchRepositories)}
};

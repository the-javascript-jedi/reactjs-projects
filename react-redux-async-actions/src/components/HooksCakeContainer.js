import React from "react";
// useSelector is a hook the react-redux library provides which acts as a close equivalent to the mapStateToProps function
//so to get hold of any state that is maintained in redux-store we use the useSelector hook
//useDispatch hook returns a reference to the dispatch function from the redux store
import { useSelector, useDispatch } from "react-redux";
// import the buyCake action creator
import { buyCake } from "../redux";
function HooksCakeContainer() {
  // useSelector accepts a function as its parameter and this function is called as selector function
  //the selector function receives the redux state as it's argument(similar to mapStateToProps) and returns the value
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // this variable can be used to dispatch actions when necessary
  const dispatchHook = useDispatch();
  return (
    <div>
      <h2>Hooks -- Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatchHook(buyCake())}>Buy Cake</button>
    </div>
  );
}
export default HooksCakeContainer;

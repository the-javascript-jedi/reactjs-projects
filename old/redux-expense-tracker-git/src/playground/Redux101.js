import React from "react";
import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});
const setCount = (count) => ({
  type: "SET",
  count,
});
const resetCount = () => ({
  type: "RESET",
});
// Reducers
const countReducer=(state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":    
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":      
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
}
const store = createStore(countReducer);
const Redux101 = () => {
  // store.subscribe function is executed whenever the state changes
  store.subscribe(() => {
    console.log(store.getState());
  });  
  store.dispatch(incrementCount({ incrementBy: 5 })); //increments count by 5 
  store.dispatch(incrementCount()); //increments count by 1
  store.dispatch(resetCount());
  store.dispatch(decrementCount());
  store.dispatch(decrementCount({ decrementBy: 10 }));  
  store.dispatch(setCount(1000));
  store.dispatch(resetCount());
  return <div>Redux_101</div>;
};
export default Redux101;
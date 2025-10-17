import { BUY_CAKE } from "./cakeTypes";
const initialState = {
  numOfCakes: 10,
};
//reducer
// reducer accepts 2 parameters - state and action
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        // we reduce the state count by action.payload
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
export default cakeReducer;

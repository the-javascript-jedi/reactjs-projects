import { BUY_ICE_CREAM } from "./iceCreamTypes";
const initialState = {
  numOfIceCreams: 20,
};
//reducer
// reducer accepts 2 parameters - state and action
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        // preserve state
        ...state,
        //    only change the necessary value
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;

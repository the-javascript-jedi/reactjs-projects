import { BUY_CAKE } from "./cakeTypes";
// action creator - BUY_CAKE
// we set the default value as 1 for the number
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    //we add a new property called payload and payload is equal to number parameter
    //this sends additional information to reducer
    payload: number,
  };
};

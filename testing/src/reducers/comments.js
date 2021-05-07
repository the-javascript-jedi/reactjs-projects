import { FETCH_COMMENTS, SAVE_COMMENT } from "actions/types";

// this function will contain initial argument of initial state, and a second argument of action
// state = [] - eventualy we want to return an array of empty comments, so we initialize the state as an empty array
export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      // save the comment received from the action creator payload to existing state
      return [action.payload, ...state];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map((comment) => comment.name);
      //return all previous comments also with the new comments
      return [...state, ...comments];
    default: {
      return state;
    }
  }
}

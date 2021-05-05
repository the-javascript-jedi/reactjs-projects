import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  // create a fake action creator
  const action = {
    type: SAVE_COMMENT,
    payload: "Testing New Comment",
  };
  // pass initial state as empty array and action we created
  const newState = commentsReducer([], action);
  //   the data passed must match the payload "Testing New Comment"
  expect(newState).toEqual(["Testing New Comment"]);
});

it("handles action with unknown type", () => {
  //  we can also pass an unknown type  as an empty object or more specifically we can pass in some random text
  const newState = commentsReducer([], { type: "random text abcde" });
  // expectation is newState must be an empty array
  expect(newState).toEqual([]);
});

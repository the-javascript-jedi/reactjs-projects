// import action creator
import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";
// testing the saveComment action
describe("saveComment", () => {
  it("has the correct type", () => {
    // call the action creator, get the action back and write explanation about the action
    const action = saveComment();
    //check the type
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("has the correct payload", () => {
    // pass a payload to the action
    const action = saveComment("testing new comment");
    // check if the payload has the same data when we are calling the action type
    expect(action.payload).toEqual("testing new comment");
  });
});

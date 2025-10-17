import React from "react";
// shallow is used to render an instance of our app component and none of its children
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
let wrapped;
// before each test executes this function is run
// it is a location for some common setup that needs to be done, for every single test inside this file
// it will assign a copy of our app component to wrapped variable
beforeEach(() => {
  wrapped = shallow(<App />);
});
// shows a comment box
it("shows a comment box", () => {
  // find every copy of CommentBox, .find returns an array which contains every instance of CommentBox
  expect(wrapped.find(CommentBox).length).toEqual(1); // 1 if CommentBox is found, 0 if no CommentBox is found
});
// shows a comment list
it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

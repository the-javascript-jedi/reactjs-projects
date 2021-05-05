import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

// since li is created using redux , we nned to get the data to redux store to render the commentlist
// we can use the initialState to simulate the redux state
it("it creates one LI per comment", () => {
  // find the no of li items created
  // console.log('wrapped.find("li").length', wrapped.find("li").length);
  expect(wrapped.find("li").length).toEqual(2);
});

// a text is shown inside each li
it("shows the text for each comment", () => {
  //console.log("wrapped.render().text()", wrapped.render().text()); //Comment 1Comment 2
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});

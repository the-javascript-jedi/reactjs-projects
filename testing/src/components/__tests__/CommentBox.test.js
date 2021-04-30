import React from "react";
// for Full Dom rendering we need to use mount
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
let wrapped;
// beforeEach() - initialization is a location for some common setup that needs to be done, for every single test inside this file
// it will assign a copy of our app component to wrapped variable
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
// afterEach - cleanup is run after every single test is executed we can use it for cleanup
afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  // console.log(wrapped.find("textarea").length);
  // console.log(wrapped.find("button").length);
  // exactly one text area must be present
  expect(wrapped.find("textarea").length).toEqual(1);
  // exactly one button must be present
  expect(wrapped.find("button").length).toEqual(1);
});
// describe can be used to group certain sets of test inside a single file
describe("the text area", () => {
  // beforeEach inside describe will only modify the it functions in the describe block
  beforeEach(() => {
    wrapped = mount(<CommentBox />);
    //first argument is the event name to be simulated
    //second argument is a mock event object
    // in the front end code the event will be replaced by our mock event object and it can access event.target.value
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    // wrapped.update() is used to force a component update
    wrapped.update();
  });
  it("has a text area that users can type in", () => {
    //find the textarea and pass some random text to the value prop
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, text area gets emptied", () => {
    //simulate the form submission
    wrapped.find("form").simulate("submit");
    wrapped.update();
    // check if textarea is empty after form submission
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
//describe ends

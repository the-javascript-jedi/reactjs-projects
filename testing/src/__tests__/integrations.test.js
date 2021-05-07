import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "root";
import App from "components/App";

beforeEach(() => {
  // install moxios mock
  moxios.install();
  // if it sees a request going to the json api, then it should automatically intercept that call and respond to us
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    //fool axios by providing a response
    status: 200,
    response: [
      {
        name: "Fetched #1",
      },
      {
        name: "Fetched #2",
      },
    ],
  });
});
afterEach(() => {
  // uninstall moxios mock
  moxios.uninstall();
});
it("can fetch a list of comments and display them", (done) => {
  /*Attemt to render the *entire* app*/
  // rendering the instance of root componet and passing it the app, the App component contains all the other components inside our application, so by rendering these two things together we can display the entire application
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  /*find the 'fetchComments' button and click it*/
  //will find the button with the className "fetch-comments" and simulate the click event
  wrapped.find(".fetch-comments").simulate("click");
  //introduce a tiny pause for moxios to make the request
  //Jest will run immediately without any consideration for delayed events so setTimeout will not be used properly
  // so for delayed events we need to pass the done callback event
  //moxios.wait(()=>{ is similar to setTimeout(() => {
  moxios.wait(() => {
    // after we get the rsponse data from moxios we need to update the wrapped component
    wrapped.update();
    /*Expect to find a list of comments! //500 lis */
    expect(wrapped.find("li").length).toEqual(2);
    // all code will be run only when we invoke done then test will be completed
    done();
    // cleanup
    wrapped.unmount();
  });
});

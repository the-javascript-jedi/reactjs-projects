console.log("App.js is running");
//JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>;
// using Babel
var template = /*#__PURE__*/ React.createElement(
  "p",
  {
    id: "someId",
  },
  "This is JSX from app.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

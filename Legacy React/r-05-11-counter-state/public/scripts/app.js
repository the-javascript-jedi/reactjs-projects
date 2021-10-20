"use strict";

// using ES5
var IndecisionApp = React.createClass({
  displayName: "IndecisionApp",

  getInitialState: function getInitialState() {
    return {
      options: []
    };
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello"
    );
  }
});
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));

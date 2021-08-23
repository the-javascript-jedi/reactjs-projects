"use strict";

// IndecisonApp -- Root component
var IndecisonApp = React.createClass({
  displayName: "IndecisonApp",

  render: function render() {
    var title = "Indecison";
    var subtitle = "Put your life in the hands of a computer";
    var options = ["Thing one", "Thing two", "Thing three"];
    return React.createElement(
      "div",
      null,
      React.createElement(Header, { title: title, subtitle: subtitle }),
      React.createElement(Action, null),
      React.createElement(Options, { options: options }),
      React.createElement(AddOption, null)
    );
  }
});

// Header Component
var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    console.log("this.props", this.props);
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.props.title
      ),
      React.createElement(
        "h2",
        null,
        this.props.subtitle
      )
    );
  }
});
//Action Component
var Action = React.createClass({
  displayName: "Action",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        null,
        "What should i do?"
      )
    );
  }
});
// Option Component
var Option = React.createClass({
  displayName: "Option",

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.props.option
    );
  }
});
// Options Component
var Options = React.createClass({
  displayName: "Options",

  render: function render() {
    console.log("Options--this.props", this.props.options.length);
    return React.createElement(
      "div",
      null,
      this.props.options.map(function (option, index) {
        return React.createElement(Option, { option: option, key: index });
      })
    );
  }
});

// Add Option Component
var AddOption = React.createClass({
  displayName: "AddOption",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "AddOption Component Here"
    );
  }
});

ReactDOM.render(React.createElement(IndecisonApp, null), document.getElementById("app"));

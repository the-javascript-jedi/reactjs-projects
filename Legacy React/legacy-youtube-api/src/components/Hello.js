// import React, { Component } from "react";

// // export class Hello extends Component {
// //     render() {
// //         return (
// //             <div>

// //             </div>
// //         )
// //     }
// // }
// var HelloMessage = React.createClass({
//   render: function () {
//     return <h1>Hello Message {this.props.message}</h1>;
//   },
// });
// export default HelloMessage;

var React = require("react");
var ReactDOM = require("react-dom");

var MyComponent = React.createClass({
  render: function () {
    return <div>Hello World</div>;
  },
});

ReactDOM.render(<MyComponent />, node);

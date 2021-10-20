// using ES5
var IndecisionApp = React.createClass({
  getInitialState: function () {
    return {
      options: [],
    };
  },
  render: function () {
    return <div>Hello</div>;
  },
});
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

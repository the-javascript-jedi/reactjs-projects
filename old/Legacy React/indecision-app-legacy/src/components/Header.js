// ES6
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.subtitle && <h2>{props.subtitle}</h2>}
//     </div>
//   );
// };

// Header.defaultProps = {
//   title: "Indecision",
// };

// ES5
var React = require("react");
var Header = React.createClass({
  getDefaultProps: function () {
    return {
      title: "Indecision",
    };
  },
  render: function () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.subtitle && <h2>{this.props.subtitle}</h2>}
      </div>
    );
  },
});
export default Header;

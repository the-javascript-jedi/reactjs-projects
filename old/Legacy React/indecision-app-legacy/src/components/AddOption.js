// ES6
// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }
//   handleAddOption(e) {
//     e.preventDefault();

//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);

//     this.setState(() => ({ error }));

//     if (!error) {
//       e.target.elements.option.value = "";
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }

// ES5
var React = require("react");
var AddOption = React.createClass({
  // state
  getInitialState() {
    return {
      /* initial state */
      error: undefined,
    };
  },
  // functions
  handleAddOption: function (e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // set state
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  },
  render: function () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  },
});
export default AddOption;

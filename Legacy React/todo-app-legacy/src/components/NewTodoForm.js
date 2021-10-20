var React = require("react");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

var NewTodoForm = React.createClass({
  // state
  getInitialState() {
    return {
      task: "",
    };
  },
  handleChange: function (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  },
  handleSubmit: function (evt) {
    evt.preventDefault();
    // ES6 - Adding key to object
    // this.props.createTodo({ ...this.state, id: uuidv4 });
    // ES5 - Adding key to object
    const newState = Object.assign(this.state, { ["id"]: uuidv4() });
    this.props.createTodo(newState);
    console.log("newState", newState);
    this.setState({ task: "" });
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={this.task}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  },
});
export default NewTodoForm;

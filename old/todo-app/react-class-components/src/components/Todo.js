import React, { Component } from "react";
export class Todo extends Component {
  constructor(props) {
    super(props);
    // set state to check if user is editing the field
    //if user is editing a field shoe the editing textbox
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  // access the removeTodo callback
  handleRemove() {
    // console.log("handleRemove called--Todo");
    this.props.removeTodo(this.props.id);
  }
  // change the state of the toggle button
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  // edit form submission
  handleUpdate(evt) {
    evt.preventDefault();
    // take new task and pass it upto parent to update the todo
    this.props.updateTodo(this.props.id, this.state.task);
    // change the state from editing
    this.setState({ isEditing: false });
  }
  // input handle change
  handleChange(evt) {
    this.setState({
      // name of the form value
      [evt.target.name]: evt.target.value,
    });
  }
  // componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log("TODO COMPONENT DID UPDATE");
    console.log("prevProps.task", prevProps.task);
    console.log("this.props.task", this.props.task);
  }

  // handleToggle- toggle the task to completed
  handleToggle() {
    // pass the id of todo to be completed
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            className={this.props.completed ? "completed" : ""}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return result;
  }
}

export default Todo;

import React, { Component } from "react";
import * as uuid from "uuid";

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    // bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    // access the createTodo callback
    //add a unique id and completed false key value to the newly added todo
    //...this.state contains only task
    // this.props.createTodo({ ...this.state, id: uuid.v4(), completed: false });
    // we can also createTodo separately
    this.props.createTodo({
      task: this.state.task,
      id: uuid.v4(),
      completed: false,
    });
    this.setState({ task: "" });
    console.log("state", this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todos</label>
          <input
            type="text"
            placeholder="New Todo"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default NewTodoForm;

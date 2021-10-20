import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    //newTodo=>{task: 'Task 1', id: '35ff0a6d-9064-44fd-ac62-fb50cf406af0'} is spread and added to existing todos
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  remove(id) {
    // console.log("remove-id--TodoHandler", id);
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      // if id is matching update the id with updated task
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      // if id does not match return the todo
      return todo;
    });
    // set the state with updated tasks
    this.setState({ todos: updatedTodos });
  }
  // componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log("IN COMPONENT DID UPDATE--TodoList");
    console.log("prevState.todos", prevState.todos);
    console.log("this.state.todos", this.state.todos);
  }
  // toggleCompletion
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      // if id is matching update the id with completed status
      if (todo.id === id) {
        // change completed to toggle behavour
        return { ...todo, completed: !todo.completed };
      }
      // if id does not match return the todo
      return todo;
    });
    // set the state with updated tasks
    this.setState({ todos: updatedTodos });
  }
  render() {
    // todos
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          removeTodo={this.remove}
          updateTodo={this.update}
          completed={todo.completed}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div>
        <h1>TodoList</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
export default TodoList;

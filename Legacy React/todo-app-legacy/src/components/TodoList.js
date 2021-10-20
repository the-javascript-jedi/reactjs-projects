var React = require("react");
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

var TodoList = React.createClass({
  // getInitialState: function () {
  //   return {
  //     todos: [],
  //   };
  // },
  getInitialState() {
    return {
      todos: [],
    };
  },
  create: function (newTodo) {
    //ES6 - spread syntax
    // this.setState({
    //   todos: [...this.state.todos, newTodo],
    // });
    // ES5 - using concat
    this.setState((prevState) => ({
      todos: prevState.todos.concat([newTodo]),
    }));
  },
  removeTodoHandler: function () {
    console.log("remove called");
  },
  render: function () {
    var todos = this.state.todos.map(function (todo) {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          removeTodo={removeTodoHandler}
          id={todo.id}
        />
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  },
});
export default TodoList;

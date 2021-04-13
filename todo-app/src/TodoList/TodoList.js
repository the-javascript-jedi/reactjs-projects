import React, { useState } from "react";
import Todo from "./Todo/Todo";
import NewTodoForm from "./NewTodoForm/NewTodoForm";
import { v4 as uuid } from "uuid";
import "./TodoList.css";
const TodoList = () => {
  const [todos, setTodos] = useState([
    { task: "Walk the Fish", id: 1, completed: false },
    { task: "Groom Chickens", id: 2, completed: false },
  ]);

  // create todo
  const createTodo = (newTodo) => {
    console.log("newTodo", newTodo);
    //setTheArray((oldArray) => [...oldArray, newElement]);
    setTodos((todos) => [
      ...todos,
      { task: newTodo, id: uuid(), completed: false },
    ]);
  };
  // remove todo - we need id to remove particular todo
  const removeTodoHandler = (todoId) => {
    console.log("todoId", todoId);
    const todosAfterDelete = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(todosAfterDelete);
  };
  // update todos - we need an id and the data which needs to be updated
  const updateTodoHandler = (id, updatedTask) => {
    console.log(id, updatedTask);
    const updatedTodos = todos.map((todo) => {
      // if the todo id matches we need to spread only the task and update the todo
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      } else {
        // if the id does not match simply return the todo
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  // toggle completion - when we click on the todo a strkethrough text must be visible
  const toggleCompletionHandler = (id) => {
    const updatedTodosCompletion = todos.map((todo) => {
      // if the todo id matches we need to spread only the task and update the todo.completed
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        // if the id does not match simply return the todo
        return todo;
      }
    });
    setTodos(updatedTodosCompletion);
  };

  const todosMap = todos.map((todo) => {
    return (
      <Todo
        completed={todo.completed}
        task={todo.task}
        key={todo.id}
        id={todo.id}
        removeTodo={removeTodoHandler}
        updateTodo={updateTodoHandler}
        toggleTodo={toggleCompletionHandler}
      />
    );
  });
  return (
    <div className="TodoList">
      <h1>
        Todo List! <span>A Simple React Todo List App</span>
      </h1>
      <ul>{todosMap}</ul>
      <NewTodoForm createTodo={createTodo} />
    </div>
  );
};
export default TodoList;

import React, { useState } from "react";
import "./Todo.css";
const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(props.task);

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    // take new task data and pass upward
    // we need to pass the id and the task data which need to be updated
    props.updateTodo(props.id, task);
    setIsEditing(false);
  };
  // form handle change
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleCompletionToggle = () => {
    props.toggleTodo(props.id);
  };
  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form onSubmit={handleUpdate} className="Todo-edit-form">
          <input type="text" name="task" value={task} onChange={handleChange} />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          className={props.completed ? "Todo-task completed" : "Todo-task"}
          onClick={handleCompletionToggle}
        >
          {props.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleForm}>
            <i class="fas fa-pen"></i>
          </button>
          <button onClick={() => props.removeTodo(props.id)}>
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
  return result;
};

export default Todo;

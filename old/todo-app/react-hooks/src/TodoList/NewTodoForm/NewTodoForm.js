import React, { useState } from "react";
import "./NewTodoForm.css";
const NewTodoForm = (props) => {
  let [state, setState] = useState({
    task: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.task);
    props.createTodo(state.task);
    setState({ task: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          id="task"
          placeholder="New Todo"
          name="task"
          value={state.task}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};
export default NewTodoForm;

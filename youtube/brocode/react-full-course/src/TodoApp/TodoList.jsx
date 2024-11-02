import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(["Eat", "Take Shower", "walk dog"]);
  const [newTask, setNewTask] = useState([]);

  function handleInputChange(event) {
    console.log("handleInputChange", event);
    setNewTask(event.target.value);
  }
  function addTask() {
    setTasks((prevState) => [...prevState, newTask]);
  }
  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }
  function moveTaskUp(index) {
    // stop at first point in array for moving up
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    // stop at last point in array for moving down
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add Button
          </button>
        </div>
        <ol>
          {tasks.map((val, index) => (
            <li key={index}>
              <span>{val}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Move Task Up &#8613;
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Move Task Down &#8615;
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default TodoList;

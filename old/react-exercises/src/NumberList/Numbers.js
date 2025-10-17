import React from "react";
const Numbers = (props) => {
  const handleDelete = () => props.deleteGoal(props.nums);
  return (
    <div>
      {props.nums} <button onClick={handleDelete}>X</button>
    </div>
  );
};
export default Numbers;

import React, { useState } from "react";

const MyComponent = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const handleClick = () => {
    const newFood = document.getElementById("foodInput").value;
    setFoods((prevState) => [...prevState, newFood]);
    document.getElementById("foodInput").value = "";
  };

  const removeElements = (index) => {
    const updatedFoods = [...foods]; // Create a copy of the array
    updatedFoods.splice(index, 1); // Remove the item at the specified index
    setFoods(updatedFoods); // Set the updated array as the new state
  };
  return (
    <div>
      <h2>List Of Food</h2>
      <ul>
        {foods.map((val, index) => (
          <li key={index}>
            {val} <span onClick={() => removeElements(index)}>X</span>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Enter Food" id="foodInput" />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add Food
      </button>
    </div>
  );
};

export default MyComponent;

import React, { useState } from "react";
const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(true);

  const updateName = () => {
    setName("Spongebob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <div>Name: {name}</div>
        <button onClick={() => updateName()}>Set Name</button>
      </div>
      <div>
        {" "}
        <br />
        Age : {age}
        <button onClick={() => incrementAge()}>Increment Age</button>
      </div>
      <div>
        {" "}
        <br />
        isEmployed : {isEmployed ? "Yes" : "No"}
        <button onClick={() => toggleStatus()}>Toggle Status</button>
      </div>
    </>
  );
};
export default MyComponent;

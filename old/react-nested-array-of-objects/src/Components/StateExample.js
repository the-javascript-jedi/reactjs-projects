import React, { useState } from "react";

const StateExample = () => {
  const [stateData, setStateData] = useState([
    {
      todos: [
        { id: 1, title: "todos 1", completed: false },
        { id: 2, title: "todos 2", completed: false },
      ],
    },
    {
      LearningItems: [
        { id: 1, title: "LearningItems 1", completed: false },
        { id: 2, title: "LearningItems 2", completed: false },
      ],
    },
    {
      artefacts: [
        { id: 1, title: "artefacts 1", completed: false },
        { id: 2, title: "artefacts 2", completed: false },
      ],
    },
  ]);
  console.log("stateData", stateData);
  return <div>StateExample</div>;
};

export default StateExample;

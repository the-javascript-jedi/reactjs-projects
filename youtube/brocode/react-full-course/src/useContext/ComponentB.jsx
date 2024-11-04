import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="box">
      <h1>Component B</h1>
      <ComponentC></ComponentC>
    </div>
  );
};
export default ComponentB;

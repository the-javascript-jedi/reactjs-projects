import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      Counter
      <div>{count}</div>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

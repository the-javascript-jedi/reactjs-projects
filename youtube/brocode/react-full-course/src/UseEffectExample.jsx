import React, { useState, useEffect } from "react";
const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
    // cleanup code
    return () => {
      // SOME CLEANUP CODE when component unmount
    };
  }, [count, color]);

  const handleAdd = () => {
    // // When you update count using setCount, the count value doesn’t immediately reflect the updated state within the same function. React batches state updates, so count in the handleAdd function holds the previous value until the component re-renders.
    // // update color on change of state
    // setCount((prevState) => {
    //   const newCount = prevState + 1;
    //   setColor(newCount > 5 ? "blue" : "red");
    //   return newCount;
    // });

    // update just count
    setCount((prevState) => prevState + 1);
  };

  const handleChangeColor = () => {
    setColor((prevState) => (prevState === "green" ? "blue" : "green"));
  };
  return (
    <div>
      <p>Count:{count}</p>
      <p style={{ color: color }}>Color:{color}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleChangeColor}>ChangeColor</button>
    </div>
  );
};
export default UseEffectExample;

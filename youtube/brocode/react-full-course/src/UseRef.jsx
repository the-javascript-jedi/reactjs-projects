import React, { useEffect, useRef } from "react";
const UseRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("COMPONENT RENDERED!!");
  });
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }
  return (
    <div>
      <>UseRef</>
      <div>
        <button onClick={handleClick}>Click Me!</button>
        <input ref={inputRef} type="text" />
      </div>
    </div>
  );
};
export default UseRef;

import React, { useState, useEffect } from "react";
const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  return (
    <div>
      WindowWidth
      <>
        <p>Window Width: {width} px</p>
        <p>Window Height: {height} px</p>
      </>
    </div>
  );
};
export default WindowWidth;

import React, { useState, useEffect } from "react";
const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // Add event listener to update width and height
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");
    return () => {
      console.log("EVENT LISTENER REMOVED");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   update the title with height and width
  useEffect(() => {
    document.title = `${width} X ${height}`;
  }, [width, height]);

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

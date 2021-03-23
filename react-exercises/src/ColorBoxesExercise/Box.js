import React, { useState } from "react";
import { choice } from "./helpers";
import "./Box.css";
const Box = (props) => {
  const [color, setColor] = useState(choice(props.colors));
  const pickColor = () => {
    console.log("box clicked");
    // this do...while check is done so the same color is not repeated from the array
    let newColor;
    do {
      newColor = choice(props.colors);
      setColor(newColor);
    } while (newColor === color);
  };
  //   handle click
  const handleClick = () => {
    // console.log("handleClick");
    pickColor();
  };
  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};
export default Box;

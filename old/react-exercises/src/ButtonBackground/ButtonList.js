import React, { useState } from "react";
import "./ButtonList.css";
const ButtonList = () => {
  const [colorFromState, setColorFromState] = useState("cyan");
  ButtonList.defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"],
  };

  const changeColor = (color) => {
    setColorFromState(color);
    console.log("colorObj", color);
  };
  return (
    <div className="ButtonList" style={{ backgroundColor: colorFromState }}>
      {ButtonList.defaultProps.colors.map((c) => {
        const colorObj = { backgroundColor: c };
        return (
          <button style={colorObj} onClick={() => changeColor(c)}>
            Click on Me!
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;

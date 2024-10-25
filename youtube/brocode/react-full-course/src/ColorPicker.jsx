import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color:{color}</p>
      </div>
      <label htmlFor="">Select a Color</label>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          handleColorChange(e);
        }}
      />
    </div>
  );
};

export default ColorPicker;

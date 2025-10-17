import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import action
import { changeColorAction } from "../features/themeReducer";
const ChangeColor = () => {
  const [color, setColor] = useState("");
  // step 5 - dispatch hook to dispatch actions
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <button onClick={() => dispatch(changeColorAction(color))}>
        CHANGE COLOR
      </button>
    </div>
  );
};
export default ChangeColor;

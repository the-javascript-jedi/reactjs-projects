import React, { useState } from "react";

const Box = ({ boxColor, boxNumber, handleDrag, handleDrop, updateOrder }) => {
  const [days, SetDays] = useState("Day 1");
  //on update of box textbox send the box id to the parent component
  const changeInputHandler = (event) => {
    SetDays(event.target.value);
    console.log("event.target.parentElement.id", event.target.parentElement.id);
    //Box-1||Box-2||Box-3
    updateOrder(event.target.parentElement.id);
  };
  return (
    <div
      // draggable sets whether the element can be dragged or not;
      draggable={true}
      id={boxNumber}
      // onDragOver is an event listener triggered when you drag the element over something else;
      onDragOver={(ev) => ev.preventDefault()}
      // onDragStart is an event listener triggered when you start dragging the element;
      onDragStart={handleDrag}
      // onDrop is an event listener triggered when you drop the element;
      onDrop={handleDrop}
      style={{
        backgroundColor: boxColor,
        border: "1px solid",
        borderColor: boxColor,
        borderRadius: "5px",
        color: "#FFF",
        width: "30%",
        height: "100px",
      }}
    >
      {boxNumber}
      <input type="text" value={days} onChange={changeInputHandler} />
    </div>
  );
};

export default Box;

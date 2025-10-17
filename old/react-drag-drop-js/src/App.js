import React, { useState, useEffect } from "react";
import Box from "./Box";

const App = () => {
  //dragId - keep track of which box it is we're currently dragging.(Box-1,Box-2,Box-3)
  const [dragId, setDragId] = useState();
  const [boxes, setBoxes] = useState([
    {
      id: "Box-1",
      color: "red",
      order: 1,
    },
    {
      id: "Box-2",
      color: "green",
      order: 2,
    },
    {
      id: "Box-3",
      color: "blue",
      order: 3,
    },
  ]);
  useEffect(() => {
    console.log("boxes", boxes);
  }, [boxes]);
  //update the order of boxes on textbox change
  const updateOrder = (boxId) => {
    let newBoxes = JSON.parse(JSON.stringify(boxes));
    newBoxes.map(function (box, index) {
      //initialize order of all boxes
      box.order = index;
      //update order of updated box
      if (box.id === boxId) {
        console.log("box.order updated", box.order);
        box.order = newBoxes.length;
      }
      return null;
    });
    // newBoxes.find(function (x) {
    //   if (x.id === boxId) {
    //     console.log("x.order", x.order);
    //     x.order = newBoxes.length + 1;
    //   }
    // });
    console.log("newBoxes", newBoxes);
    setBoxes(newBoxes);
  };

  const handleDrag = (ev) => {
    console.log("ev.currentTarget.id", ev.currentTarget.id); //Box-1||Box-2||Box-3
    setDragId(ev.currentTarget.id);
  };
  const handleDrop = (ev) => {
    //identify which box is being dragged and which box it has been dropped on.
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);
    //take note of original order of boxes
    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;
    //rearrange the new boxes and return as a new array
    const newBoxState = boxes.map((box) => {
      //check if the current box's id is equal to the dragId. If it is, set its order to be the dropBoxOrder. If not, check if it is equal to the id of the box being dropped on, and if that is true set its order to be the dragBoxOrder.
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });
    //order variable for the two boxes involved has been swapped.
    setBoxes(newBoxState);
  };
  return (
    <div className="App">
      {boxes
        .sort((a, b) => a.order - b.order)
        .map((box) => (
          <Box
            key={box.id}
            boxColor={box.color}
            boxNumber={box.id}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            updateOrder={updateOrder}
          />
        ))}
    </div>
  );
};
export default App;

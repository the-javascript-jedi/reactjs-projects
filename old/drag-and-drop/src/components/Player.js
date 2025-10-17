import React from "react";
import { useDrag } from "react-dnd";

const Player = ({
  name,
  age,
  nationality,
  photo,
  index,
  playerType,
  onDropPlayer,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      // playerType will be team || player
      type: playerType,
      index,
    },
    //end callback is triggered when drop happens
    end: (item, monitor) => {
      // monitor.getDropResult() -  we get element details -(playerType,index)
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        //call parent function to move the item to the array
        //basically delete from one array and move to anothert array
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      //check if element is being dragged
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <li className="list-group-item my-1 p-2" ref={dragRef}>
      <div className="card border-0">
        <div className="row no-gutters">
          <div className="col-md-1">
            <img
              src={photo}
              className="img-thumbnail border-secondary rounded-circle"
            />
          </div>
          <div className="col-md-9">
            <div className="card-body py-1 px-2 text-left">
              <h5 className="card-title d-inline">{name}</h5>
              <p className="card-text d-inline">, {nationality}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Player;

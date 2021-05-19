import React, { useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  /* we need to apply a transform property to each card with translate and rotate */
  /* transform: translate(10px, 20px) rotate(20deg); */
  let angle = Math.random() * 90 - 45;
  let xPos = Math.random() * 40 - 20;
  let yPos = Math.random() * 40 - 20;
  // dynamic transform styles
  let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  useEffect(() => {}, []);

  return (
    <img
      style={{ transform: transform }}
      className="Card"
      src={props.image}
      alt={props.name}
    />
  );
};
export default Card;

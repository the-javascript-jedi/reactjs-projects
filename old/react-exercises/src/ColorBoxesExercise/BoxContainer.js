import React from "react";
import Box from "./Box";
import "./BoxContainer.css";
const BoxContainer = () => {
  BoxContainer.defaultProps = {
    numBoxes: 18,
    allColors: ["purple", "green", "blue", "pink"],
  };
  const boxes = Array.from({
    length: BoxContainer.defaultProps.numBoxes,
  }).map(() => <Box colors={BoxContainer.defaultProps.allColors} />);
  return <div className="BoxContainer">{boxes}</div>;
};
export default BoxContainer;

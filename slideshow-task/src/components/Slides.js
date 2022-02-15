import React, { useState } from "react";
import slideData from "../data/data";
import Slide from "./Slide/Slide";

const Slides = () => {
  const [slidePage, setSlidePage] = useState(0);

  const restartClick = () => {
    setSlidePage(0);
  };
  const nextClick = () => {
    setSlidePage((prevState) => prevState + 1);
  };
  const prevClick = () => {
    setSlidePage((prevState) => prevState - 1);
  };

  return (
    <>
      <div className="buttons">
        <button onClick={restartClick} disabled={slidePage === 0}>
          Restart
        </button>
        <button onClick={prevClick} disabled={slidePage === 0}>
          Prev
        </button>
        <button
          onClick={nextClick}
          disabled={slidePage === slideData.length - 1}
        >
          Next
        </button>
      </div>
      <div>
        <Slide
          title={slideData[slidePage].title}
          text={slideData[slidePage].text}
        />
      </div>
    </>
  );
};

export default Slides;

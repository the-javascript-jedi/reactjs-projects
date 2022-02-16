import React, { useState } from "react";
import slideData from "../data/data";
import Slide from "./Slide/Slide";

const Slides = () => {
  const [slidePage, setSlidePage] = useState(0);
  // restart click - reset the slide to first
  const restartClick = () => {
    setSlidePage(0);
  };
  // next click - show next slide
  const nextClick = () => {
    setSlidePage((prevState) => prevState + 1);
  };
  // prev click - show prev slide
  const prevClick = () => {
    setSlidePage((prevState) => prevState - 1);
  };

  return (
    <div className="slides-container">
      <div className="buttons-container">
        <button
          onClick={restartClick}
          disabled={slidePage === 0}
          className="btn btn-restart"
        >
          Restart
        </button>
        <button
          onClick={prevClick}
          disabled={slidePage === 0}
          className="btn btn-primary"
        >
          Prev
        </button>
        <button
          onClick={nextClick}
          disabled={slidePage === slideData.length - 1}
          className="btn btn-secoondary"
        >
          Next
        </button>
      </div>
      <div className="slides">
        <Slide
          title={slideData[slidePage].title}
          text={slideData[slidePage].text}
        />
      </div>
    </div>
  );
};

export default Slides;

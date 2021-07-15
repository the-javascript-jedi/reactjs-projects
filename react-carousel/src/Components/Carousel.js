import React, { useState } from "react";
import "./Carousel.css";

import { images } from "../Helpers/CarouselData";
import ArrowBackiosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  //state
  const [currImg, setCurrImg] = useState(1);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          // change Image index only if image index greater than 0
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackiosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subTitle}</p>
        </div>
        <div
          className="right"
          // change Image index only if image index less than last index
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}
export default Carousel;

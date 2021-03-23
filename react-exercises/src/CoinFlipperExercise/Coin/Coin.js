import React from "react";
import "./Coin.css";
const Coin = (props) => {
  console.log("props--Coin", props);
  Coin.defaultProps = {
    headsImage:
      "https://qphs.fs.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf",
    tailsImage:
      "https://qphs.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26",
  };
  return (
    <>
      <div className="flip-card">
        <div
          className={`flip-card-${
            props.info.side === "tails" ? "inner" : "outer"
          }`}
        >
          <div className="flip-card-front">
            <img
              style={{ width: "200px", height: "200px" }}
              src={Coin.defaultProps.headsImage}
              alt={props.info.side}
            />
          </div>
          <div className="flip-card-back">
            <img
              style={{ width: "200px", height: "200px" }}
              src={Coin.defaultProps.tailsImage}
              alt={props.info.side}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Coin;

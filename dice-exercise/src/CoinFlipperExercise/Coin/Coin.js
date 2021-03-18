import React from "react";
const Coin = (props) => {
  return (
    <div>
      <img
        style={{ width: "200px", height: "200px" }}
        src={props.info.imgSrc}
        alt={props.info.side}
      />
    </div>
  );
};
export default Coin;

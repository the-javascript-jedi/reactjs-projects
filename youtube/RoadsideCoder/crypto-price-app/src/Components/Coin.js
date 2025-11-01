import React from "react";
const Coin = ({ name, icon, price, symbol, websiteUrl }) => {
  console.log("icon", icon);
  return (
    <div className="coin">
      <h1>Name:{name}</h1>
      <img src={icon} alt="icon" />
      <h1>Price:{price}</h1>
      <h1>Symbol:{symbol}</h1>
      <a href={websiteUrl} target="_blank">
        {name}
      </a>
    </div>
  );
};
export default Coin;

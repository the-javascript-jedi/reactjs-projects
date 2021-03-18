import React, { useState } from "react";
import { coinChoice } from "./helper";
import Coin from "./Coin/Coin";
const CoinContainer = () => {
  CoinContainer.defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://qphs.fs.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf",
      },
      {
        side: "tails",
        imgSrc:
          "https://qphs.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26",
      },
    ],
  };

  const [currCoin, setCurrCoin] = useState(null);
  const [nFlips, setNflips] = useState(0);
  const [nHeads, setNHeads] = useState(0);
  const [nTails, setNTails] = useState(0);
  // flip coin handler
  const handleMe = () => {
    const newCoin = coinChoice(CoinContainer.defaultProps.coins);
    console.log("flipped coin--newCoin", newCoin);
    setCurrCoin(newCoin);
    setNflips((prevCount) => prevCount + 1);
    if (newCoin.side === "heads") {
      setNHeads((prevNHead) => prevNHead + 1);
    } else {
      setNTails((prevNTail) => prevNTail + 1);
    }
  };
  return (
    <div className="coinContainer">
      <h2>Let's Flip a Coin</h2>
      {currCoin && <Coin info={currCoin} />}
      <button onClick={handleMe}>Flip Me</button>
      <p>
        Out of {nFlips}, there have been {nHeads} heads and {nTails} tails
      </p>
    </div>
  );
};

export default CoinContainer;

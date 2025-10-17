import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import Coin from "./Components/Coin";
function App() {
  // state
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  // API request
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then(function (response) {
        console.log("response.data.coins", response.data.coins);
        setListOfCoins(response.data.coins);
      })
      .catch(function (msg) {
        console.error(msg);
      });
  }, []);
  // search filter
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin..."
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </div>
      <div className="cryptoDiasplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              price={coin.price}
              symbol={coin.symbol}
              websiteUrl={coin.websiteUrl}
              icon={coin.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

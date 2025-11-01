import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import fallbackCryptoData from "./data/fallback-crypto.json"; // Import fallback data
import Coin from "./components/Coin";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        console.log("Attempting to fetch from API...");
        const response = await axios.get(
          "https://api.coinstats.app/public/v1/coins?skip=0&limit=10"
        );

        console.log("API Success:", response.data);
        setListOfCoins(response.data.coins || response.data);
        setIsUsingFallback(false);
        setError(null);
      } catch (err) {
        // console.error("API failed, using fallback data:", err.message);
        console.log("fallbackCryptoData.coins:", fallbackCryptoData.coins);
        // Use fallback data when API fails
        setListOfCoins(fallbackCryptoData.coins);
        setIsUsingFallback(true);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
  return (
    <>
      <div className="app">
        <div className="cryptoHeader">
          <input
            type="text"
            placeholder="Bitcoin"
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
          />
        </div>
        <div className="cryptoDisplay">
          {filteredCoins.map((coin) => {
            return (
              <Coin
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

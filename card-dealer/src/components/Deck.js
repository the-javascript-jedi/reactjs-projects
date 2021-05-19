import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Deck = () => {
  const API_BASE_URL = `https://deckofcardsapi.com/api/deck`;
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [drawn, setDrawn] = useState([]);
  // make api request
  const makeRequest = async () => {
    setLoading(true);
    try {
      let response = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      console.log("response", response);
      //response.data:deck_id: "keqeesmsgmxi" remaining: 52 shuffled: true success: true
      setDeck(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  make new request to api on button click
  const getCard = async () => {
    console.log("Button Clicked");
    let deck_id = deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      //   make request using deck id
      let cardRes = await axios.get(cardUrl);
      console.log("cardRes.data", cardRes.data);
      //   if the card api does not show success (eg:no more cards are remaining or wrong deck id is provided)
      if (!cardRes.data.success) {
        throw new Error("No card remaining!!!");
      }
      let card = cardRes.data.cards[0];
      // set state of card to drawn card
      setDrawn((oldArray) => [
        ...oldArray,
        {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`,
        },
      ]);
    } catch (error) {
      alert(error);
      console.error("error", error);
    }
  };
  // create a deck of cards
  const cards = drawn.map((c) => (
    <Card key={c.id} name={c.name} image={c.image} />
  ));
  // displaying a loading screen or the cards
  const displayCards = () => {
    if (!loading) {
      return cards;
    } else {
      return <p>Loading...</p>;
    }
  };
  return (
    <div className="Deck">
      <h1 className="Deck-title">♦ Card Dealer ♦</h1>
      <h1 className="Deck-title subtitle">♦ A little demo made with React ♦</h1>
      <button className="Deck-btn" onClick={() => getCard()}>
        Get Card
      </button>
      <div className="Deck-cardArea">{displayCards()}</div>
    </div>
  );
};
export default Deck;

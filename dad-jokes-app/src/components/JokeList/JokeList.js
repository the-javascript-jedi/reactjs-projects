import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JokeList.css";
// import Joke component
import Joke from "../Joke/Joke";
// import uuid
import { v4 as uuidv4 } from "uuid";
const JokeList = () => {
  // default props
  JokeList.defaultProps = {
    numJokesToGet: 10,
  };
  //check if data exists in local storage and set the variable(jokesFromLocalStorage) to data from local storage or initialize as empty array []
  var jokesFromLocalStorage =
    JSON.parse(window.localStorage.getItem("jokes_ls")) === null
      ? []
      : JSON.parse(window.localStorage.getItem("jokes_ls"));
  console.log("jokes_ls", JSON.parse(window.localStorage.getItem("jokes_ls")));
  // state
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState(jokesFromLocalStorage);
  //useEffect(1) - make an api request
  useEffect(() => {
    if (jokes.length === 0) {
      makeRequest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //useEffect(2) - set localstorage with updated values on update of jokes array(i.e(Post is updated )or(new jokes are added from api))
  useEffect(() => {
    window.localStorage.setItem("jokes_ls", JSON.stringify(jokes));
  }, [jokes]);
  // makeRequest function
  const makeRequest = async () => {
    setLoading(true);
    // initialize a joke array
    let jokesArr = [];
    try {
      //   console.log("inside try");
      while (jokesArr.length < JokeList.defaultProps.numJokesToGet) {
        console.log("inside while");
        // default response is text/html, we need to particularly specify the headers as application/json
        let response = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        });
        jokesArr.push({ id: uuidv4(), joke: response.data.joke, votes: 0 });
      }
      console.log("jokesArr", jokesArr);
      //after fetch request is made to api update the existing array with new data from api
      setJokes((oldArr) => [...oldArr, ...jokesArr]);
      window.localStorage.setItem("jokes_ls", JSON.stringify(jokesArr));
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };
  // handleVote function will handle the votes
  // id is the single_joke.id and delta can be positive or negative(upvote or downvote)
  const handleVote = (id, delta) => {
    // update the vote using id with upvote or downvote
    // map through the old array value and check if the id is the same and edit upvote of particular id passed on click of joke
    setJokes((oldArr) =>
      oldArr.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  };
  const handleClick = () => {
    setLoading(true);
    // make api request
    makeRequest();
  };
  // display the Loader or JokeList
  const displayJokeList = () => {
    // show loading icon or jokes data list
    if (loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="JokeList">
          <div className="JokeList-sidebar">
            <h1 className="JokeList-title">
              <span>Dad</span> Jokes
            </h1>
            <img
              src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
              alt="A laughing emojicon"
            />
            <button className="JokeList-getmore" onClick={() => handleClick()}>
              get New Jokes
            </button>
          </div>
          <div className="JokeList-jokes">
            {jokes.map((single_joke) => (
              <Joke
                key={single_joke.id}
                votes={single_joke.votes}
                text={single_joke.joke}
                upvote={() => handleVote(single_joke.id, 1)}
                downvote={() => handleVote(single_joke.id, -1)}
              />
            ))}
          </div>
        </div>
      );
    }
  };
  return <div>{displayJokeList()}</div>;
};
export default JokeList;

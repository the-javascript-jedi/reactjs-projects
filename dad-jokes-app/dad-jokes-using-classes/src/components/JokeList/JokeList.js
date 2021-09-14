import React, { Component } from "react";
import axios from "axios";
import Joke from "../Joke/Joke";
import "./JokeList.css";
import { v4 as uuidv4 } from "uuid";

export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes")) || [],
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }
  // make request to API
  async getJokes() {
    // Load Jokes
    let jokes = [];
    // we use a while loop to loop through duplicate jokes
    // if we use for loop only the 10 data will be present
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      jokes.push({ id: uuidv4(), text: res.data.joke, votes: 0 });
    }
    // add jokes to existing kokes whenever request is made to the api
    this.setState(
      (st) => ({
        loading: false,
        jokes: [...st.jokes, ...jokes],
      }),
      //once state is finished updating update the local storage
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  handleVote(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          // if the id matches ctreate a new object by spread and update the votes or return the joke to array
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      // this runs after setState is set
      //we set the votes to local storage
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  handleClick() {
    // set the spinner loading to true and then in callback call the getJokes api
    this.setState({ loading: true }, this.getJokes);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
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
          <button className="JokeList-getmore" onClick={this.handleClick}>
            get New Jokes
          </button>
        </div>
        <h1>Dad Jokes</h1>
        <div className="JokeList-jokes">
          {this.state.jokes.map((j) => (
            <div>
              {/* {j.joke} {j.votes} */}
              <Joke
                key={j.id}
                votes={j.votes}
                text={j.text}
                upvote={() => this.handleVote(j.id, 1)}
                downvote={() => this.handleVote(j.id, -1)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

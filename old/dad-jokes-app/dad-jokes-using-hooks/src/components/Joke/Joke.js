import React from "react";
import "./Joke.css";
const Joke = (props) => {
  // Method to chose border color
  const getColor = () => {
    if (props.votes >= 15) {
      return "#4CAF50";
    } else if (props.votes >= 12) {
      return "#8BC34A";
    } else if (props.votes >= 9) {
      return "#CDDC39";
    } else if (props.votes >= 6) {
      return "#faed00";
    } else if (props.votes >= 3) {
      return "#FFC107";
    } else if (props.votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  };
  // Method to choose emoji
  const getEmoji = () => {
    if (props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (props.votes >= 12) {
      return "em em-laughing";
    } else if (props.votes >= 9) {
      return "em em-smiley";
    } else if (props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (props.votes >= 3) {
      return "em em-neutral_face";
    } else if (props.votes >= 0) {
      return "em em-expressionless";
    } else if (props.votes >= -3) {
      return "em em-face_with_rolling_eyes";
    } else if (props.votes >= -6) {
      return "em em-face_with_raised_eyebrow";
    } else if (props.votes >= -9) {
      return "em em-cry";
    } else if (props.votes >= -12) {
      return "em em-persevere";
    } else return "em em-confounded";
  };
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={props.upvote}></i>
        <span className="Joke-votes" style={{ borderColor: getColor() }}>
          {props.votes}
        </span>
        <i className="fas fa-arrow-down" onClick={props.downvote}></i>
      </div>
      <div className="Joke-text">{props.text}</div>
      <div className="Joke-smiley">
        <i
          className={getEmoji()}
          role="presentation"
          aria-label="ROLLING ON THE FLOOR LAUGHING"
        ></i>
      </div>
    </div>
  );
};

export default Joke;

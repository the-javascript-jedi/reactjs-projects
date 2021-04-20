import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    // provide a default value so that dice will have rolling animation
    val: 5,
  };
  handleClickHandler = () => {
    this.props.handleClick(this.props.idx);
  };
  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
    // this.props.numberWords[this.props.val - 1]; -- calculate the dice number for font awesome
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    // if this.props.locked is true then append a Die-locked class
    if (locked) {
      classes += "Die-locked ";
    }
    // add rolling animation class to the dice
    // add rolling animation class to the dice if the respective class is not locked-currently we are passing the rolling prop as a prop in Dice.js only if the respective array is not locked
    //if (rolling && !locked) {
    if (rolling) {
      classes += "Die-rolling ";
    }
    return (
      <i
        className={classes}
        onClick={this.handleClickHandler}
        disabled={disabled}
      ></i>
    );
  }
}

export default Die;

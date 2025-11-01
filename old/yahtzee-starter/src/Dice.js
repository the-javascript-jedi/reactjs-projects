import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            handleClick={this.props.handleClick}
            val={d}
            //  locked : [false, true, false, false, false] -- locked is an arrray containing respective states whether dice is locked or not
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
            disabled={this.props.disabled}
            //rolling is true for this die if this.props.rolling is true && if this individual die is not locked
            rolling={this.props.rolling && !this.props.locked[idx]}
          />
        ))}
      </div>
    );
  }
}

export default Dice;

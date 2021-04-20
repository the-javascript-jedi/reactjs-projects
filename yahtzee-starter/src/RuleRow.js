import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, name, description, doScore } = this.props;
    // if score is present disabled is true
    const disabled = score !== undefined;
    return (
      // if the props.score is not available we must execute doScore on click
      // if this.props.score is not available we must use active class
      <tr
        // className
        // className={`RuleRow RuleRow-${this.props.score === undefined ? "active" : "disabled"}`}
        //using destructured props
        className={`RuleRow RuleRow-${
          this.props.score === undefined ? "active" : "disabled"
        }`}
        // onClick
        // onClick={this.props.score === undefined ? this.props.doScore : null}
        //using destructured props
        onClick={disabled ? null : doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    );
  }
}

export default RuleRow;

import React, { Component } from "react";
import "./ColorBox.css";
export class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ background: this.props.background }}>
        {this.props.name}
        <span>More</span>
      </div>
    );
  }
}
export default ColorBox;

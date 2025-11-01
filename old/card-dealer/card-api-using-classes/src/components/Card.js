import React, { Component } from "react";
import "./Card.css";
export class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 90 - 45;
    let yPos = Math.random() * 90 - 45;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  componentDidUpdate() {
    // console.log("_transform", this._transform);
  }
  render() {
    //transform:translate(10px,20px) rotate(20deg)
    return (
      <div className="card">
        <img
          style={{ transform: this._transform }}
          src={this.props.image}
          alt={this.props.name}
        />
      </div>
    );
  }
}
export default Card;

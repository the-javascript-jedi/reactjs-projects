import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.css";
import Navbar from "../Navbar/Navbar";
export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevelHandler = this.changeLevelHandler.bind(this);
  }
  // change level of slider
  changeLevelHandler(level) {
    this.setState({ level: level });
  }
  render() {
    const colorBoxes = this.props.palette.colors[this.state.level].map(
      (color) => <ColorBox background={color.hex} name={color.name} />
    );
    return (
      <div className="Palette">
        {/* Navbar */}
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevelHandler}
        />
        <div className="Palette-colors">
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer eventually */}
      </div>
    );
  }
}
export default Palette;

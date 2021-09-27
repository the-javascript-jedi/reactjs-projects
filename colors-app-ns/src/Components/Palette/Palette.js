import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.css";
import Navbar from "../Navbar/Navbar";
export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevelHandler = this.changeLevelHandler.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  // change level of slider
  changeLevelHandler(level) {
    this.setState({ level: level });
  }
  // handleChangeHandler of dropdown
  changeFormat(val) {
    //alert(val);
    this.setState({ format: val });
  }
  render() {
    const colorBoxes = this.props.palette.colors[this.state.level].map(
      (color) => {
        //displays the different formats for each color
        console.log("color[this.state.format]", color[this.state.format]);
        return (
          <ColorBox
            background={color[this.state.format]}
            name={color.name}
            key={color.id}
          />
        );
      }
    );
    return (
      <div className="Palette">
        {/* Navbar */}
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevelHandler}
          handleChangeHandler={this.changeFormat}
        />
        <div className="Palette-colors">
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* Footer */}
        <footer className="Palette-footer">
          {this.props.palette.paletteName}
          <span className="emoji">{this.props.palette.emoji}</span>
        </footer>
      </div>
    );
  }
}
export default Palette;

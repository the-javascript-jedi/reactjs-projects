import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.css";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
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
        // console.log("color[this.state.format]", color[this.state.format]);
        // color[this.state.format] #f6b906
        // console. log("color", color);
        // {name: 'red 500', id: 'red', hex: '#eb3d30', rgb: 'rgb(235,61,48)', rgba: 'rgba(235,61,48,1.0)'}
        return (
          <ColorBox
            background={color[this.state.format]}
            name={color.name}
            key={color.id}
            colorId={color.id}
            paletteId={this.props.palette.id}
            showLink={true}
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
          showingAllColors={true}
        />
        <div className="Palette-colors">
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* Footer */}
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}
export default Palette;

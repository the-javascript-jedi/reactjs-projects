import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    //we are not setting state we are just gathering the data one time and using them again and again
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log("this._shades", this._shades);
    // state
    this.state = { format: "hex" };
    //bind functions
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
  // return all the shades of a given colour
  gatherShades(palette, colorToFilterBy) {
    console.log("palette", palette);
    console.log("colorToFilterBy", colorToFilterBy);
    // take the palette and the color and find all the colors that matches the passed color shade inside the palette
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    //use slice and remove the first element in array
    return shades.slice(1);
  }

  render() {
    //render the color boxes
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[this.state.format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          handleChangeHandler={this.changeFormat}
          showingAllColors={false}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default SingleColorPalette;

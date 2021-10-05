import React from "react";
function PaletteFooter(props) {
  //functional component so we simply pass just props not this.props
  return (
    <footer className="Palette-footer">
      {props.paletteName}
      <span className="emoji">{props.emoji}</span>
    </footer>
  );
}
export default PaletteFooter;

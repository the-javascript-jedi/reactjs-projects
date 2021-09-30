import React, { Component } from "react";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/styles";
const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
export class PaletteList extends Component {
  constructor() {
    super();
    this.goToPalette = this.goToPalette.bind(this);
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render(props) {
    // console.log("this.props", this.props);
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.container}>
          <nav className={this.props.classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={this.props.classes.palettes}>
            {this.props.palettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);

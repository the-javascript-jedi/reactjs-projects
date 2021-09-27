import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
};

function MiniPalette(props) {
  // const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = props.colors.map((color) => (
    <div
      className={props.classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
    <div className={props.classes.root}>
      <div className={props.classes.colors}>{miniColorBoxes}</div>
      <h5 className={props.classes.title}>
        {props.paletteName}{" "}
        <span className={props.classes.emoji}>{props.emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);

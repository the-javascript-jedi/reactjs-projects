import React, { Component } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { IconButton } from "@material-ui/core";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChangeHandler(e.target.value);
    this.setState({ open: true });
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    return (
      <div>
        <header className="Navbar">
          <div className="logo">
            <Link to="/">reactcolorpicker</Link>
          </div>
          {/* display slider based on props */}
          {this.props.showingAllColors && (
            <div className="slider-container">
              <span>Level: {this.props.level}</span>
              <div className="slider">
                <Slider
                  defaultValue={this.props.level}
                  min={100}
                  max={900}
                  step={100}
                  onAfterChange={this.props.changeLevel}
                />
              </div>
            </div>
          )}

          <div className="select-container">
            <Select
              onChange={this.handleFormatChange}
              value={this.state.format}
            >
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
          </div>
        </header>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {this.state.format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton onClick={this.closeSnackbar} color="inherit">
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
export default Navbar;

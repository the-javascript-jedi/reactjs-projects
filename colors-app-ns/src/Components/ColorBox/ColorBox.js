import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";
import chroma from "chroma-js";
export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    //calculate luminance to display dark or light text
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.6;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          style={{ background: background }}
          className="ColorBox"
          onClick={this.clickedColorBox}
        >
          {/* overlay */}
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          {/* overlay text */}
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={isLightColor && "dark-text"}>
              {this.props.background}
            </p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {/* links */}
          {/* /palette/:palettedId/:colorId */}
          {this.props.showLink && (
            <Link
              to={`/palette/${this.props.paletteId}/${this.props.colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                MORE
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;

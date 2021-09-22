import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
export class ColorBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div
          className="ColorBox"
          style={{ background: background }}
          onClick={this.clickedColorBox}
        >
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;

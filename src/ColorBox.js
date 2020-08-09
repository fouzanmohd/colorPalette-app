import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background: background }} className="ColorBox">
          <div className="Box-container">
            <div className="Box-content">
              <span>{name}</span>
            </div>
            <button className="Copy-btn">Copy</button>
          </div>
          <span className="See-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;

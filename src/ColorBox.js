import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div style={{ background: background }} className="ColorBox">
        <div className="Box-container">
          <div className="Box-content">
            <span>{name}</span>
          </div>
          <button className="Copy-btn">Copy</button>
        </div>
        <span className="See-more">MORE</span>
      </div>
    );
  }
}
export default ColorBox;

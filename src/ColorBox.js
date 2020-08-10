import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }
  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };
  render() {
    const { background, name } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background: background }}
            className={`Copy-overlay ${copied && "show"}`}
          />
          <div className={`Copy-text ${copied && "show"}`}>
            <h1>Copied</h1>
            <p>{background}</p>
          </div>
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

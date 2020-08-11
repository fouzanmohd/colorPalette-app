import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: 500, format: "hex" };
  }

  sliderChange = (scale) => {
    this.setState({ scale });
  };

  formatChange = (val) => {
    this.setState({ format: val });
  };
  render() {
    const { scale, format } = this.state;
    const { colors } = this.props.palette;
    const colorBox = colors[scale].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <NavBar
          scale={scale}
          sliderChange={this.sliderChange}
          formatChange={this.formatChange}
        />
        <div className="Palette-colors">{colorBox}</div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;

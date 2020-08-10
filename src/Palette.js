import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: 500 };
  }

  sliderChange = (scale) => {
    this.setState({ scale });
  };

  render() {
    const { scale } = this.state;
    const { colors } = this.props.palette;
    const colorBox = colors[scale].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* navbar goes here */}
        <NavBar scale={scale} sliderChange={this.sliderChange} />
        <div className="Palette-colors">{colorBox}</div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;

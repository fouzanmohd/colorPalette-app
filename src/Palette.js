import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
        <Slider
          defaultValue={scale}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.sliderChange}
        />
        <div className="Palette-colors">{colorBox}</div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;

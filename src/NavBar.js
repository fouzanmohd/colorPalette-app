import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
  }
  handleChange = (e) => {
    this.setState({ format: e.target.value });
    this.props.formatChange(e.target.value);
  };
  render() {
    const { scale, sliderChange } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">ReactColorPicker</a>
        </div>
        <div className="Slider-container">
          <span>Scale: {scale}</span>
          <div className="slider">
            <Slider
              defaultValue={scale}
              min={100}
              max={900}
              step={100}
              onAfterChange={sliderChange}
            />
          </div>
        </div>
        <div className="Select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex"> Hex - #fffff</MenuItem>
            <MenuItem value="rgb"> RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba"> RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default NavBar;

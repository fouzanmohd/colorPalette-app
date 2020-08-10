import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";

const NavBar = ({ scale, sliderChange }) => {
  return (
    <div className="Navbar">
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
    </div>
  );
};

export default NavBar;

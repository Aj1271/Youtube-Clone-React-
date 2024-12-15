import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src=".\src\assets\Youtube_icon.png" alt="YouTube Logo" className="logo-img" />
      <span className="logo-text">YouTube<span className="logo-subtext"><sup>pk</sup></span></span>
    </div>
  );
};

export default Logo;

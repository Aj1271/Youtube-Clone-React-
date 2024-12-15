import React from "react";
import "./HamburgerMenu.css";
import HamburgerClick from "./HamburgerClick"; // Correct import for the renamed component

const HamburgerMenu = () => {
  return (
    <>
      {/* Render HamburgerClick */}
      <HamburgerClick />
    </>
  );
};

export default HamburgerMenu;

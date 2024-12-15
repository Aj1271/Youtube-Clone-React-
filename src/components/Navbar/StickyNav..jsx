import React, { useRef } from 'react';
import './StickyNav.css';

const StickyNav = () => {
  const navRef = useRef(null);

  // Function to scroll the nav to the right
  const scrollNext = () => {
    if (navRef.current) {
      navRef.current.scrollLeft += 200; // Adjust scroll amount for smoother scrolling
    }
  };

    // Function to scroll the nav to the left
    const scrollPrevious = () => {
      if (navRef.current) {
        navRef.current.scrollLeft -= 200;
      }
    };

  return (
    <div className="sticky-nav">
    {/* Left Button */}
    <button className="prev-button" onClick={scrollPrevious}>
      <i className="fa-solid fa-angle-left"></i>
    </button>
      <div className="nav-links" ref={navRef}>
        <a href="#all" className="nav-link">All</a>
        <a href="#music" className="nav-link">Music</a>
        <a href="#pakistani-dramas" className="nav-link">Pakistani Dramas</a>
        <a href="#t-series" className="nav-link">T-Series</a>
        <a href="#movies" className="nav-link">Movies</a>
        <a href="#songs" className="nav-link">Songs</a>
        <a href="#foods" className="nav-link">Foods</a>
        <a href="#foods" className="nav-link">Skills</a>
        <a href="#foods" className="nav-link">Literature</a>
        <a href="#foods" className="nav-link">AI</a>
        <a href="#foods" className="nav-link">Coding</a>
        <a href="#foods" className="nav-link">English Series</a>
        <a href="#foods" className="nav-link">Skills</a>
        <a href="#foods" className="nav-link">Literature</a>
        <a href="#foods" className="nav-link">AI</a>
        <a href="#foods" className="nav-link">Coding</a>
        <a href="#foods" className="nav-link">English Series</a>
        {/* Additional links */}
        <a href="#more" className="nav-link">More</a>
      </div>
      <button className="next-button" onClick={scrollNext}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default StickyNav;

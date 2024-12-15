import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faPlay,
  faVideo,
  faMusic,
  faTv,
  faGamepad,
  faFileAlt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "./HamburgerClick.css";
import Logo from "./Logo"; // Assuming you have a Logo component or image file

const HamburgerClick = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (e) => {
    if (
      e.target.closest(".H-Sbar") === null &&
      e.target.closest(".hamburger-menu") === null
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeSidebar);
    } else {
      document.removeEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [isOpen]);

  return (
    <div className="hamburger-container">
      {/* Hamburger Icon */}
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger-menu"
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      {isOpen && <div className="overlay"></div>}
      <div className={`H-Sbar ${isOpen ? "open" : ""}`}>
        {/* Logo and Hamburger Icon on top */}
        <div className="sidebar-header">
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-menu"
            onClick={toggleSidebar}
          />
          <Logo /> {/* Logo component */}
        </div>

        <div className="H-Sbar-section">
          <div className="menu-item">
            <FontAwesomeIcon icon={faHome} />
            <h4>Home</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faPlay} />
            <h4>Shorts</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faVideo} />
            <h4>Subscriptions</h4>
          </div>
          <div className="divider"></div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faFileAlt} />
            <h4>History</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faVideo} />
            <h4>Playlists</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faPlay} />
            <h4>Your Videos</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faThumbsUp} />
            <h4>Liked Videos</h4>
          </div>
          <div className="divider"></div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faTv} />
            <h4>Trending</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faMusic} />
            <h4>Music</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faGamepad} />
            <h4>Gaming</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faFileAlt} />
            <h4>News</h4>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faTv} />
            <h4>Sports</h4>
          </div>
          <div className="divider"></div>
          <div className="menu-item">
            <h4>Move from YouTube</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerClick;

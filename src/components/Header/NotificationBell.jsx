import React from "react";
import "./NotificationBell.css";

const NotificationBell = () => {
  return (
    <div className="notification-bell">
      <i className="fa-solid fa-bell"></i>
      <span className="notification-count">9+</span>
    </div>
  );
};

export default NotificationBell;

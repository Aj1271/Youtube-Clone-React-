import React from "react";
import "./SidebarItem.css";

const SidebarItem = ({ iconClass, label }) => {
  return (
    <div className="sidebar-item">
      <i className={iconClass}></i>
      <span className="sidebar-label">{label}</span>
    </div>
  );
};

export default SidebarItem;

import React from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem iconClass="fa-solid fa-house" label="Home" />
      <SidebarItem iconClass="fa-solid fa-video" label="Shorts" />
      <SidebarItem iconClass="fa-solid fa-play-circle" label="Subscriptions" />
      <SidebarItem iconClass="fa-regular fa-circle-user" label="Profile" />
    </div>
  );
};

export default Sidebar;

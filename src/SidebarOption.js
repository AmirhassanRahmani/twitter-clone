import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, icon , active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {icon}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

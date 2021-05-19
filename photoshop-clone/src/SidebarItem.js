import React from "react";

export default function SidebarItem(props) {
  return (
    <button 
    //if the props.active is true then add the active class
    className={`sidebar-item ${props.active === true ? "active" : ""}`}
    onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
}

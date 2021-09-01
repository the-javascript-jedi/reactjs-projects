import React from "react";
import "./DropdownMenu.css";
export class DropdownMenu extends React.Component {
  getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.title;
  };

  getMenuItem = (menuItem, depthLevel, index) => {
    let title = this.getMenuItemTitle(menuItem, index, depthLevel);
    console.log("menuItem", menuItem);
    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <li>
          {title}
          {/* recursively call the menu */}
          <DropdownMenu config={menuItem.submenu} submenu={true} />
        </li>
      );
    } else {
      return <li>{title}</li>;
    }
  };

  render = () => {
    let { config } = this.props;

    let options = [];
    config.map((item, index) => {
      // console.log("item", item);
      console.log("options", options);
      return options.push(this.getMenuItem(item, 1, index));
    });

    if (this.props.submenu && this.props.submenu === true) {
      return <ul>{options}</ul>;
    }

    return <ul className="dropdown-menu">{options}</ul>;
  };
}

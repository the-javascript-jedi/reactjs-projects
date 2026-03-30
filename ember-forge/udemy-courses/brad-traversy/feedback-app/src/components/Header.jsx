import React from "react";

function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };
  return (
    <div className="container" style={headerStyles}>
      <h2>Feedback UI</h2>
      <p>{props.text}</p>
    </div>
  );
}

Header.defaultProps = {
  text: "Feedback UI Default",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a65",
};
export default Header;

function Header({
  // default props
  text = "Feedback UI Default",
  bgColor = "rgba(0,0,0,0.4)",
  textColor = "#ff6a65",
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <div className="container" style={headerStyles}>
      <h2>Feedback UI</h2>
      <p>{text}</p>
    </div>
  );
}
export default Header;

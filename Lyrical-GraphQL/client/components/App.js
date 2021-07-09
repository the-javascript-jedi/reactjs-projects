import React from "react";
// always return a div with className container
// and show children which are passed in as props
const App = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default App;

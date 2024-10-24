import React from "react";
import UserGreeting from "./UserGreeting.jsx";
const App = () => {
  return (
    <>
      <UserGreeting username={"test-username"} isLoggedIn={true} />
    </>
  );
};
export default App;

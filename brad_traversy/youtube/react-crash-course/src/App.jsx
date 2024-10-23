import React from "react";
import Student from "./Student";
const App = () => {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={35} isStudent={false} />
      <Student />
    </>
  );
};
export default App;

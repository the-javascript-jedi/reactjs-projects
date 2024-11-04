import React, { useState, createContext, createElement } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("BroCode");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB></ComponentB>
      </UserContext.Provider>
    </div>
  );
};
export default ComponentA;

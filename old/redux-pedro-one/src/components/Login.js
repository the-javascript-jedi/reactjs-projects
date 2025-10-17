import React from "react";
// useDispatch hook to dispatch actions(modifying state values)
import { useDispatch } from "react-redux";
import { loginAction, logOutAction } from "../features/userReducer";
const Login = () => {
  //Step 5 dispatch action
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            loginAction({
              name: "Nithin",
              age: "31",
              email: "nithin@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logOutAction());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;

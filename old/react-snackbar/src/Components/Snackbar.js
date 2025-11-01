import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Snackbar.css";
// Enclose the component in a forwardRef
const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  //   useImperativeHandle - we must specify the parent ref and we must then specify an object with functions which can be accessed from outside the component through the parent component ref

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2500);
    },
  }));
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.type == "success" ? "#00F593" : "#FF0033",
      }}
    >
      <div className="symbol">
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});
export default Snackbar;

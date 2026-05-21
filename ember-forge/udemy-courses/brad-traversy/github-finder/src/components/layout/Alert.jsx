import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Alert = () => {
  const dispatch = useDispatch();
  const { msg, type } = useSelector((state) => state.alert);

  return (
    <div className={`alert-container alert-${type}`}>
      {msg} & {type}
    </div>
  );
};

export default Alert;

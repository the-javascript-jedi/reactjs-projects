import React from "react";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <div>
      <button type={type} disabled={isDisabled} class={`btn-${version}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;

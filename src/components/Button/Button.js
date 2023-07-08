import React from "react";
import "./Button.css";

const Button = ({ onClickFn, children }) => (
  <div className="button-wrapper">
    <button className="button" onClick={onClickFn}>
      {children}
    </button>
  </div>
);

export default Button;

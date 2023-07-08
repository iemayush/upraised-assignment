import React from "react";
import "./Radio.css";

const RadioButton = ({ id, onChangeFn, value, isChecked, children }) => (
  <label class="container" id={id}>
    <input
      type="radio"
      checked={isChecked}
      name="radio"
      value={value}
      onChange={onChangeFn}
    />
    <span class="checkmark"></span>
    {children}
  </label>
);

export default RadioButton;

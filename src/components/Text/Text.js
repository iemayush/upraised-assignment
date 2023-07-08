import React from "react";
import "./Text.css";

const Text = ({ color, size, weight, lineHeight, children }) => {
  const textStyles = {
    color,
    fontSize: size,
    fontWeight: weight,
    lineHeight,
  };
  return (
    <>
      <span className="text-wrapper" style={textStyles}>
        {children}
      </span>
    </>
  );
};

export default Text;

import React, { useRef, useEffect } from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ value, pathColor, trailColor, children }) => {
  const progressBarRef = useRef();

  useEffect(() => {
    progressBarRef.current.style.background = `conic-gradient(
      ${pathColor} ${value * 3.6}deg, 
      ${trailColor} ${value * 3.6}deg
    )`;
    // eslint-disable-next-line
  }, [value]);

  return (
    <>
      <div className="circular-progress" ref={progressBarRef}>
        <div className="value-container">{children}</div>
      </div>
    </>
  );
};

export default CircularProgressBar;

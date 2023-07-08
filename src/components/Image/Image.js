import React from "react";

const Image = ({ src, alt, width = "100%", height = "100%" }) => (
  <img src={src} alt={alt} height={height} width={width} />
);

export default Image;

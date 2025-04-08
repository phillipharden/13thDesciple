// RiseImage.jsx
import React from "react";
import "../styles/riseimage.css";

const RiseImage = ({ src, alt}) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt}  className="rise-image" />
    </div>
  );
};

export default RiseImage;

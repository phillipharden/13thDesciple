import React, { useEffect, useState } from "react";
import "../styles/animatedtext.css"; 

const AnimatedText = ({ text, delay = 100 }) => {
  return (
    <div className="animated-text">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="animated-text__letter"
          style={{ animationDelay: `${i * delay}ms` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;

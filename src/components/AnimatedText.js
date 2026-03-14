import React from "react";
import "../styles/animatedtext.css";

const AnimatedText = ({ text, delay = 100 }) => {
  const words = text.split(" ");

  let letterIndex = 0;

  return (
    <div className="animated-text">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="animated-text__word">
          {word.split("").map((char, charIndex) => {
            const currentIndex = letterIndex++;
            return (
              <span
                key={charIndex}
                className="animated-text__letter"
                style={{ animationDelay: `${currentIndex * delay}ms` }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
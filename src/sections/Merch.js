import { useState } from "react";
import AnimatedText from "../components/AnimatedText";
import VideoCarousel from "../components/VideoCarousel";
import "../styles/Merch.css";
import Splash from "../images/the-splash.png";
import { commercialVideos } from "../data";

const Merch = () => {
  // State to track the currently playing video
  const [currentPlaying, setCurrentPlaying] = useState(null);

  // Function to handle when a video is clicked
  const handlePlay = (videoSrc) => {
    setCurrentPlaying(videoSrc); // Update the currently playing video
  };

  return (
    <section id="merch">
      <div className="container">
        <div className="headline">
          <AnimatedText text="The Splash" />
        </div>
        <div>
          <VideoCarousel videos={commercialVideos} />
        </div>

        <div className="btn-container">
          <a
            href="https://13thdesciple.bandcamp.com/merch"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-now-btn">
            Buy Now!!
          </a>
        </div>
        <div>
          <a
            href="https://13thdesciple.bandcamp.com/merch"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Splash} alt="The Splash" className="splash-img" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Merch;

import { useState } from "react";
import "../styles/Video.css";

const Video = ({ src, isPlaying, onPlay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVideoClick = () => {
    setIsExpanded(true);
    onPlay(); // Notify the parent that this video is now playing
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="video-section">
      {!isExpanded ? (
        <video
          className="video-thumb"
          onClick={handleVideoClick}
          src={src}
          controls
          autoPlay={isPlaying} // Play only if this is the active video
        />
      ) : (
        <div className="fullscreen-video" onClick={handleClose}>
          <video className="video-full" src={src} controls autoPlay />
        </div>
      )}
    </div>
  );
};

export default Video;

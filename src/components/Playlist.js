import React, { useEffect, useState } from "react";
import getVideosFromPlaylist from "./Videos"; 

const Playlist = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videoLinks = await getVideosFromPlaylist();
      setVideos(videoLinks);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Playlist</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <a href={video} target="_blank" rel="noopener noreferrer">
              {video}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;

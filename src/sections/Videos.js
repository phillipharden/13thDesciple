import VideoCarousel from "../components/VideoCarousel";
import "../styles/videos.css";
import AnimatedText from "../components/AnimatedText";
import { youtubeVideos } from "../data";

const Videos = () => {
  return (
    <section id="videos">
      <div className="container">
        <div className="headline">
          <AnimatedText text="Videos" />
        </div>
        <VideoCarousel videos={youtubeVideos} />
      </div>
    </section>
  );
}

export default Videos
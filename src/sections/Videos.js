import VideoCarousel from "../components/VideoCarousel";
import "../styles/videos.css";
import AnimatedText from "../components/AnimatedText";

const Videos = () => {
  return (
    <section id="videos">
      <div className="container">
        <div className="headline">
          <AnimatedText text="Videos" />
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default Videos
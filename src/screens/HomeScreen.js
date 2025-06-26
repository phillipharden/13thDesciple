import HeroImage from "../images/hero-img.png";
import Videos from "../sections/Videos";
import Music from "../sections/Music";
import VideoCarousel from "../components/VideoCarousel";
import "../styles/homescreen.css";
import About from "../sections/About";
import Merch from "../sections/Merch";
import Events from "../sections/Events";
import KingdomBuilding from "../sections/KingdomBuilding";

const HomeScreen = () => {
  return (
    <div>
      <section id="home" className="hero-section d-flex justify-content-center">
        <img
          src={HeroImage}
          atl="13th Desciple standing tall"
          className="hero-img fade-bottom rise-image"
        />
      </section>
<Events />
      <Videos />
      <Music />
      <About />
      <Merch />
      <KingdomBuilding />
    </div>
  );
};

export default HomeScreen;

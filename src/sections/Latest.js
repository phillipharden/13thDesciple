import AnimatedText from "../components/AnimatedText";
import Image from "../images/birthday.jpg";
import NewYear from "../images/newyear.png";
import "../styles/latest.css";

const Latest = () => {
  return (
    <section id="latest">
      <div className="container">
        <div className="headline">
          <AnimatedText text="Latest News" />
        </div>
        <div className="latest-container">
          <img
            src={NewYear}
            alt="New Years Celebration"
            className="about-img"
          />
        </div>
        <div className="latest-container">
          <img
            src={Image}
            alt="Image of 13th Desiple standing"
            className="about-img"
          />
        </div>

       
      </div>
    </section>
  );
};

export default Latest;

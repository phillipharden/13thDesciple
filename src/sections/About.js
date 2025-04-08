import AnimatedText from "../components/AnimatedText";
import Image from "../images/about-img.jpeg";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" >
      <div className="container">
        <div className="headline">
          <AnimatedText text="About" />
        </div>
        <div className="row ">
          <div className="col col-12 col-lg-6 p-4 about-image-container">
            <img
              src={Image}
              alt="Image of 13th Desiple standing"
              className="about-img fade-bottom"
            />
          </div>
          <div className="col col-12 col-lg-6 p-4 about-text-container">
            <p className="about-text">
              OneThree, also known as 13thDesciple, was born on December 6,
              1982, in Brunswick, Georgia, and raised in Atlanta, Georgia. In
              2008, he founded 13thDesciple & Company, driven by his conviction
              that the message of Jesus Christ should extend beyond the church
              and into the world. As a self-taught songwriter and producer,
              OneThree was honored with the title of GRINDER of the Year at the
              2011 Inferno Awards in recognition of his unwavering dedication.
              He has also played an instrumental role in promoting the
              Crunk4ChristRadio apartment tour, taking the gospel directly to
              the streets of Atlanta. As the CEO and recording artist of K.B.M.
              Records, OneThree leads his label with a mission to represent
              Jesus Christ and his twelve disciples, symbolized by the number
              13—one soul plus the Holy Trinity. His work is focused not on
              preaching religion, but on teaching a personal relationship with
              Jesus Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

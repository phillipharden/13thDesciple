import AnimatedText from "../components/AnimatedText";
import "../styles/events.css";
import Image from "../images/mvmnt.png";

const Events = () => {
  return (
    <section id="music">
      <div className="container">
        <div className="headline py-6">
          <AnimatedText text="Past Events" />
        </div>
        <div className="row py-4">
          <div className="col d-flex justify-content-center">
            <img
            
              src={Image}
              alt="Kingdom Building Event - June 28, 2025"
              className="event-img fade-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

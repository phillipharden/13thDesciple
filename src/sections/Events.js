import AnimatedText from "../components/AnimatedText";
import "../styles/events.css";
import NovEighth from "../images/mvmnt.png";
import FebTwentyFirst from "../images/02-21-2026.jpg";

const Events = () => {
  return (
    <section id="music">
      <div className="container">
        {/* <div className="headline py-6">
          <AnimatedText text="Upcoming Events" />
        </div>
        <div className="row py-4">
          <div className="col d-flex justify-content-center">
            <img
              src={NovEighth}
              alt="Kingdom Building Event - June 28, 2025"
              className="event-img fade-bottom"
            />
          </div>
        </div> */}
        <div className="headline py-6">
          <AnimatedText text="Past Events" />
        </div>
        <div className="row py-4">
          <div className="col d-flex justify-content-center">
            <img
              src={FebTwentyFirst}
              alt="Kingdom Building Event - June 28, 2025"
              className="event-img fade-bottom"
            />
          </div>
        </div>
        <div className="row py-4">
          <div className="col d-flex justify-content-center">
            <img
              src={NovEighth}
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

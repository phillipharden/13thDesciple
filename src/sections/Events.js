import AnimatedText from "../components/AnimatedText";
import EventCard from "../components/EventCard";
import "../styles/events.css";
import events from "../data/events";

const Events = () => {
  const today = new Date();

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = events
    .filter(event => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section id="events">
      <div className="container">

        {upcomingEvents.length > 0 && (
          <>
            <div className="headline py-6">
              <AnimatedText text="Upcoming Events" />
            </div>

            <div className="events-grid py-4">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </>
        )}

        {pastEvents.length > 0 && (
          <>
            <div className="headline py-6">
              <AnimatedText text="Past Events" />
            </div>

            <div className="events-grid py-4">
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Events;
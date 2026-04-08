import { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import EventCard from "../components/EventCard";
import { supabase } from "../lib/supabase";
import "../styles/events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } else {
        setEvents(data || []);
      }

      setLoading(false);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    const handleScroll = () => {
      setActiveImage(null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeImage]);

  const today = new Date().toISOString().split("T")[0];

  const upcomingEvents = events
    .filter((event) => event.date >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = events
    .filter((event) => event.date < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section id="events">
      <div className="container">
        {loading ? (
          <div className="headline py-6">
            <AnimatedText text="Loading Events..." />
          </div>
        ) : (
          <>
            {upcomingEvents.length > 0 && (
              <>
                <div className="headline py-6">
                  <AnimatedText text="Upcoming Events" />
                </div>

                <div className="row g-4 py-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="col-12 col-md-6 col-xl-4">
                      <EventCard event={event} onImageClick={setActiveImage} />
                    </div>
                  ))}
                </div>
              </>
            )}

            {pastEvents.length > 0 && (
              <div className="past-events-toggle-wrap py-4">
                <button
                  className="past-events-toggle"
                  onClick={() => setShowPastEvents((prev) => !prev)}
                  type="button"
                >
                  {showPastEvents ? "Hide Past Events" : "Past Events"}
                </button>
              </div>
            )}

            {showPastEvents && pastEvents.length > 0 && (
              <>
                <div className="headline py-6">
                  <AnimatedText text="Past Events" />
                </div>

                <div className="row g-4 py-4">
                  {pastEvents.map((event) => (
                    <div key={event.id} className="col-12 col-md-6 col-xl-4">
                      <EventCard event={event} onImageClick={setActiveImage} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {activeImage && (
        <div
          className="event-lightbox"
          onClick={() => setActiveImage(null)}
        >
          <div className="event-lightbox-inner">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="event-lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
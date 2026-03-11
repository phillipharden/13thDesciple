import "../styles/events.css";

const EventCard = ({ event }) => {
  const formattedDate = new Date(event.date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  );

  return (
    <div className="event-card">
      <img
        src={event.poster}
        alt={event.title}
        className="event-img"
      />

      <div className="event-info">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-date">{formattedDate}</p>

        {event.ticketLink && (
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-btn"
          >
            Get Tickets
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
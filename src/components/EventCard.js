const EventCard = ({ event, onImageClick }) => {
  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="event-card py-4">
      <div className="event-poster-wrap">
        {event.poster_url ? (
          <img
            src={event.poster_url}
            alt={event.title}
            className="event-img"
            onClick={() =>
              onImageClick?.({
                src: event.poster_url,
                alt: event.title,
              })
            }
          />
        ) : (
          <div className="event-no-image">No Flyer Yet</div>
        )}
      </div>

      <div className="event-info">
        {/* <h3 className="event-title">{event.title}</h3> */}
        <p className="event-date">{formattedDate}</p>

        {event.button_text && event.button_link && (
          <a
            href={event.button_link}
            target="_blank"
            rel="noreferrer"
            className="event-button"
          >
            {event.button_text}
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
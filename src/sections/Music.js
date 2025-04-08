import AnimatedText from "../components/AnimatedText";
import "../styles/music.css";

const Music = () => {
  return (
    <section id="music">
      <div className="container">
        <div className="headline py-6">
          <AnimatedText text="Music" />
        </div>
        <div className="row py-4">
          <div className="col col-12 col-md-6 music-box">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/5u7Z560mwLIY30JoBc4CJt?utm_source=generator"
              width="95%"
              className="spotify"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
          </div>

          <div className="col col-12 col-md-6 music-box">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              className="apple"
              style={{
                width: "95%",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/solid/1517323540"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;

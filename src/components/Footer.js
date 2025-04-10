import "../styles/footer.css";
import KMB from "../images/kmb.png";
import KBthumbnail from "../images/kingdom-building-atl-thumbnail.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-container">
        <div>
          <a
            href="https://www.youtube.com/@kingdombuildingatl7510"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={KBthumbnail}
              alt="Kingdom Building ATL"
              className="kingdom-building-thumbnail"
            />
          </a>
        </div>
        <div>
          <img src={KMB} alt="KMB Records" className="kmb-logo" />
        </div>
        <div>
          <p>&copy; K.B.M.Records {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

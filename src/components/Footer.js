import "../styles/footer.css";
import KMB from "../images/kmb.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-container">
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

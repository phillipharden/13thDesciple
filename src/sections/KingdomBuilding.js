import React from 'react'
import "../styles/KingdomBuilding.css";
import AnimatedText from "../components/AnimatedText";
import Promo from "../images/kingdom-building-promo.png";

const KingdomBuilding = () => {
  return (
    <section id="kingdom-building">
      <div>
        {/* <div className="headline">
          <AnimatedText text="Kingdom Building ATL" />
        </div> */}
        <div>
          <a
            href="https://www.youtube.com/@kingdombuildingatl7510"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            <img
              src={Promo}
              alt="Kingdom Building ATL image with host Ashton Rynolds"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default KingdomBuilding
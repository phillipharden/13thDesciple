import React, { useState } from "react";
import "../styles/navbar.css";
import Logo from "../images/logo.png";
import {
  SiApplemusic,
  SiSpotify,
  SiTiktok,
  SiYoutube,
  SiInstagram,
  SiBandsintown,
  SiBandcamp,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { TfiFacebook } from "react-icons/tfi";
import { IoShareSocial } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleSocialMenu = () => setShowSocialMenu(!showSocialMenu);
  const toggleNavMenu = () => setShowNavMenu(!showNavMenu);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={Logo} alt="13th Desciple logo" />
        </div>

        {/* First nav: Page links */}
        <ul className={`main-nav ${showNavMenu ? "active" : ""}`}>
          <li>
            <a href="#music">Music</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a
              href="https://13thdesciple.bandcamp.com/merch"
              target="_blank"
              rel="noopener noreferrer">
              Merch
            </a>
          </li>
        </ul>

        {/* Second nav: Social icons */}
        <ul className={`social-links ${showSocialMenu ? "active" : ""}`}>
          <li>
            <a
              href="https://www.facebook.com/ThirteenthDesciple"
              target="_blank"
              rel="noopener noreferrer">
              <TfiFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/onethree_13thdesciple"
              target="_blank"
              rel="noopener noreferrer">
              <SiInstagram />
            </a>
          </li>
        
          <li>
            <a
              href="https://www.youtube.com/channel/UCRgwAgBcRslrOiR--USjZEw"
              target="_blank"
              rel="noopener noreferrer">
              <SiYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@kingdombuildingat"
              target="_blank"
              rel="noopener noreferrer">
              <SiTiktok />
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/us/artist/13thdesciple/1517323326"
              target="_blank"
              rel="noopener noreferrer">
              <SiApplemusic />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/5u7Z560mwLIY30JoBc4CJt"
              target="_blank"
              rel="noopener noreferrer">
              <SiSpotify />
            </a>
          </li>
          <li>
            <a
              href="https://13thdesciple.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer">
              <SiBandcamp />
            </a>
          </li>
          <li>
            <a href="mailto:kbmrecords13@gmail.com">
              <MdEmail />
            </a>
          </li>
        </ul>
      </div>

      <div>
        {/* Hamburger for nav menu */}
        <div
          className="hamburger nav-toggle"
          onClick={toggleNavMenu}
          aria-label="Toggle navigation menu">
          <GiHamburgerMenu />
        </div>

        {/* Hamburger for social links */}
        <div
          className="hamburger social-toggle"
          onClick={toggleSocialMenu}
          aria-label="Toggle social menu">
          <IoShareSocial />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

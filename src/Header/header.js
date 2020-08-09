import React from "react";
import "./App.scss";
import logo from "../assets/logo.svg";
import img1 from "../assets/photo-grid/1.jpg";
import img2 from "../assets/photo-grid/2.jpg";
import img3 from "../assets/photo-grid/3.jpg";
import img4 from "../assets/photo-grid/4.jpg";
import img5 from "../assets/photo-grid/5.jpg";
import img6 from "../assets/photo-grid/6.jpg";
import img7 from "../assets/photo-grid/7.jpg";
import menuIcon from "../assets/menu-icon.svg";
import profileImg from "../assets/about/1.jpg";
import albumCover from "../assets/albums/1.jpg";
import HeroGridIcon from "../assets/hero-grid-btn.svg";
import facebookIcon from "../assets/social/facebook.svg";
import twitterIcon from "../assets/social/twitter.svg";
import instagramIcon from "../assets/social/instagram.svg";
import backIcon from "../assets/arrow-left.svg";

function Header() {
    const [showMenu, setShowMenu] = React.useState(false);
    const []
  const photogridRef = React.useRef();
  const albumRef = React.useRef();

  const toggleMenu = (show) => () => {
    window.event.preventDefault();
    setShowMenu(show);
  };

  const scrollToSection = (section) => () => {
    window.event.preventDefault();
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInSection = (section) => {};

  return (
    <div className="app">
      <header className="mobile-header">
        <div onClick={toggleMenu(true)} className="mobile-menu-icon">
          <img src={menuIcon} alt="Menu Icon" />
        </div>
        <div className="logo">
          <img src={logo} alt="Photography logo" />
        </div>

        <div className="mobile-menu" style={{ width: showMenu ? "100%" : 0 }}>
          <ul className="menu-link">
            <li>
              <a href="javascript:void(0)" onClick={toggleMenu(false)}>
                <img src={backIcon} stroke="white" width="32px" alt="Go back" />
              </a>
            </li>
            <li>
              <a href="explore" onClick={scrollToSection(photogridRef)}>
                Explore
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={scrollToSection(albumRef)}>
                Album
              </a>
            </li>
          </ul>
        </div>
      </header>

      <header className="desktop-header">
        <div className="logo">
          <img src={logo} alt="Photography logo" />
        </div>
        <ul className="menu-link">
          <li>
            <a href="explore" onClick={scrollToSection(photogridRef)}>
              Explore
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="javascript:void(0)" onClick={scrollToSection(albumRef)}>
              Album
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;

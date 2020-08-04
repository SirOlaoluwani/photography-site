/* eslint-disable jsx-a11y/anchor-is-valid */
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

function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  const photogridRef = React.useRef();

  const toggleMenu = (show) => () => {
    window.event.preventDefault();
    setShowMenu(show);
  };

  const scrollToPhotoGrid = () => {
    window.event.preventDefault();
    photogridRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
              <a href="#" onClick={toggleMenu(false)}>
                <img src={backIcon} stroke="white" width="32px" alt="Go back" />
              </a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Album</a>
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
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Album</a>
          </li>
        </ul>
      </header>
      <section className="hero">
        <h2>Focus, Relieve and Capture.</h2>
        <a href="#" onClick={scrollToPhotoGrid}>
          <img src={HeroGridIcon} className="grid-icon" alt="Grid Icon" />
        </a>
      </section>
      <section
        className="photo-grid content"
        id="photo-grid-section"
        ref={photogridRef}
      >
        <div className="title bottommargin-lg">
          <h4>RECENT IMAGES</h4>
          <span>We love to take beautiful, professional photographs</span>
        </div>
        <div className="photo-grid-body">
          <img src={img1} alt="1" aos="fade" />
          <img src={img2} alt="2" aos="fade" />
          <img src={img3} alt="3" aos="fade" />
          <img src={img4} alt="4" aos="fade" />
          <img src={img5} alt="5" aos="fade" />
          <img src={img6} alt="6" aos="fade" />
          <img src={img7} alt="7" aos="fade" />
        </div>
      </section>
      <section className="about content" id="about-section">
        <img src={profileImg} alt="Photographer" />
        <div>
          <div className="about-header bottommargin-lg">
            <h4>ALABI SAMUEL SEUN</h4>
            <span>Ever passionate about capturing discoveries</span>
          </div>

          <div className="about-body">
            <p className="bottommargin-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>

            <a href="#" className="contact-btn">
              CONTACT ME
            </a>
          </div>
        </div>
      </section>
      <section className="albums content">
        <div className="title bottommargin-lg">
          <h4>ALBUM</h4>
          <span>Creating memories folder by folder</span>
        </div>
        <div className="albums-body">
          <div>
            <img src={albumCover} alt="Album cover" />
          </div>
          <div>
            <img src={albumCover} alt="Album cover" />
          </div>
          <div>
            <img src={albumCover} alt="Album cover" />
          </div>
          <div>
            <img src={albumCover} alt="Album cover" />
          </div>
          <div>
            <img src={albumCover} alt="Album cover" />
          </div>
          <div>
            <img src={albumCover} alt="Album cover" />
          </div>
        </div>
      </section>
      <section className="footer content">
        <div className="logo">
          <img src={logo} alt="Photography logo" />
        </div>
        <div className="copyright">
          <p>© CAPsalmie Inc. 2017. All Rights Reserved.</p>
        </div>
        <div className="social">
          <p>Follow us</p>
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={twitterIcon} alt="Twitter Icon" />
          <img src={instagramIcon} alt="Instagram Icon" />
        </div>
      </section>
    </div>
  );
}

export default App;

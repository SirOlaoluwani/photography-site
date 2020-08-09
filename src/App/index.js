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

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  const photogridRef = React.useRef();
  const albumRef = React.useRef();

  const toggleMenu = (show) => () => {
    window.event.preventDefault();
    setShowMenu(show);
  };

  const scrollToSection = (section) => () => {
    window.event.preventDefault();

    section.current.scrollIntoView({ behavior: "smooth" });

    //if mobile menu is open, close it
    setShowMenu(false);
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
      <section className="hero">
        <h2>Focus, Relieve and Capture.</h2>
        <a href="#" onClick={scrollToSection(photogridRef)}>
          <img src={HeroGridIcon} className="grid-icon" alt="Grid Icon" />
        </a>
      </section>
      <FadeInSection>
        <section
          className="photo-grid content"
          id="photo-grid-section"
          ref={photogridRef}
        >
          <div className="title bottommargin-lg">
            <h4>RECENT IMAGES</h4>
            <span>We love to capture beautiful moments</span>
          </div>
          <div className="photo-grid-body">
            <img className="photogrid-img-1" src={img1} alt="1" aos="fade" />
            <img className="photogrid-img-2" src={img2} alt="2" aos="fade" />
            <img className="photogrid-img-3" src={img3} alt="3" aos="fade" />
            <img className="photogrid-img-4" src={img4} alt="4" aos="fade" />
            <img className="photogrid-img-5" src={img5} alt="5" aos="fade" />
            <img className="photogrid-img-6" src={img6} alt="6" aos="fade" />
            <img className="photogrid-img-7" src={img7} alt="7" aos="fade" />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>

              <a href="#" className="contact-btn">
                CONTACT ME
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="albums content" ref={albumRef}>
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
      </FadeInSection>
      <section className="footer content">
        <div className="logo">
          <img src={logo} alt="Photography logo" />
        </div>
        <div className="copyright">
          <p>© Olaoluwani Onafowope. 2020. All Rights Reserved.</p>
        </div>
        <div className="social">
          <p>Follow us</p>
          <a href="https://www.facebook.com/olaoluwani.onafowope">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M18.9 0.5H1.1C0.808262 0.5 0.528473 0.615893 0.322183 0.822183C0.115893 1.02847 0 1.30826 0 1.6V19.4C0 19.6917 0.115893 19.9715 0.322183 20.1778C0.528473 20.3841 0.808262 20.5 1.1 20.5H10.68V12.75H8.08V9.75H10.68V7.5C10.6261 6.97176 10.6885 6.43813 10.8627 5.93654C11.0369 5.43495 11.3188 4.97755 11.6885 4.59641C12.0582 4.21528 12.5068 3.91964 13.0028 3.73024C13.4989 3.54083 14.0304 3.46225 14.56 3.5C15.3383 3.49521 16.1163 3.53528 16.89 3.62V6.32H15.3C14.04 6.32 13.8 6.92 13.8 7.79V9.72H16.8L16.41 12.72H13.8V20.5H18.9C19.0445 20.5 19.1875 20.4715 19.321 20.4163C19.4544 20.361 19.5757 20.28 19.6778 20.1778C19.78 20.0757 19.861 19.9544 19.9163 19.821C19.9715 19.6875 20 19.5445 20 19.4V1.6C20 1.45555 19.9715 1.31251 19.9163 1.17905C19.861 1.04559 19.78 0.924327 19.6778 0.822183C19.5757 0.720038 19.4544 0.639013 19.321 0.583733C19.1875 0.528452 19.0445 0.5 18.9 0.5Z"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/olaoluwani_onafowope/">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path d="M15.34 3.96C15.1027 3.96 14.8707 4.03038 14.6733 4.16224C14.476 4.29409 14.3222 4.48151 14.2313 4.70078C14.1405 4.92005 14.1168 5.16133 14.1631 5.39411C14.2094 5.62689 14.3236 5.84071 14.4915 6.00853C14.6593 6.17635 14.8731 6.29064 15.1059 6.33694C15.3387 6.38324 15.5799 6.35948 15.7992 6.26866C16.0185 6.17783 16.2059 6.02402 16.3378 5.82668C16.4696 5.62935 16.54 5.39734 16.54 5.16C16.54 4.84174 16.4136 4.53652 16.1885 4.31147C15.9635 4.08643 15.6583 3.96 15.34 3.96ZM19.94 6.38C19.9206 5.5503 19.7652 4.7294 19.48 3.95C19.2257 3.28313 18.83 2.67928 18.32 2.18C17.8248 1.66743 17.2196 1.27418 16.55 1.03C15.7727 0.736161 14.9508 0.57721 14.12 0.56C13.06 0.5 12.72 0.5 10 0.5C7.28 0.5 6.94 0.5 5.88 0.56C5.04915 0.57721 4.22734 0.736161 3.45 1.03C2.78168 1.27665 2.17693 1.66956 1.68 2.18C1.16743 2.67518 0.774176 3.28044 0.53 3.95C0.236161 4.72734 0.07721 5.54915 0.0599999 6.38C-5.58794e-08 7.44 0 7.78 0 10.5C0 13.22 -5.58794e-08 13.56 0.0599999 14.62C0.07721 15.4508 0.236161 16.2727 0.53 17.05C0.774176 17.7196 1.16743 18.3248 1.68 18.82C2.17693 19.3304 2.78168 19.7234 3.45 19.97C4.22734 20.2638 5.04915 20.4228 5.88 20.44C6.94 20.5 7.28 20.5 10 20.5C12.72 20.5 13.06 20.5 14.12 20.44C14.9508 20.4228 15.7727 20.2638 16.55 19.97C17.2196 19.7258 17.8248 19.3326 18.32 18.82C18.8322 18.3226 19.2283 17.7182 19.48 17.05C19.7652 16.2706 19.9206 15.4497 19.94 14.62C19.94 13.56 20 13.22 20 10.5C20 7.78 20 7.44 19.94 6.38ZM18.14 14.5C18.1327 15.1348 18.0178 15.7637 17.8 16.36C17.6403 16.7952 17.3839 17.1884 17.05 17.51C16.7256 17.8405 16.3332 18.0964 15.9 18.26C15.3037 18.4778 14.6748 18.5927 14.04 18.6C13.04 18.65 12.67 18.66 10.04 18.66C7.41 18.66 7.04 18.66 6.04 18.6C5.38089 18.6123 4.72459 18.5109 4.1 18.3C3.68578 18.1281 3.31136 17.8728 3 17.55C2.66809 17.2287 2.41484 16.8352 2.26 16.4C2.01586 15.7952 1.88044 15.1519 1.86 14.5C1.86 13.5 1.8 13.13 1.8 10.5C1.8 7.87 1.8 7.5 1.86 6.5C1.86448 5.85106 1.98295 5.20795 2.21 4.6C2.38605 4.17791 2.65627 3.80166 3 3.5C3.30381 3.15617 3.67929 2.8831 4.1 2.7C4.70955 2.48004 5.352 2.36508 6 2.36C7 2.36 7.37 2.3 10 2.3C12.63 2.3 13 2.3 14 2.36C14.6348 2.36728 15.2637 2.48225 15.86 2.7C16.3144 2.86865 16.7223 3.14285 17.05 3.5C17.3777 3.80718 17.6338 4.18273 17.8 4.6C18.0223 5.20893 18.1373 5.85178 18.14 6.5C18.19 7.5 18.2 7.87 18.2 10.5C18.2 13.13 18.19 13.5 18.14 14.5ZM10 5.37C8.98581 5.37198 7.99496 5.67453 7.15265 6.23942C6.31035 6.80431 5.65438 7.6062 5.26763 8.54375C4.88089 9.48131 4.78072 10.5125 4.97979 11.5069C5.17886 12.5014 5.66824 13.4145 6.38608 14.131C7.10392 14.8474 8.01801 15.335 9.01286 15.5321C10.0077 15.7293 11.0387 15.6271 11.9755 15.2385C12.9123 14.85 13.7129 14.1924 14.2761 13.349C14.8394 12.5056 15.14 11.5142 15.14 10.5C15.1413 9.8251 15.0092 9.15661 14.7512 8.53296C14.4933 7.90931 14.1146 7.34281 13.6369 6.86605C13.1592 6.38929 12.5919 6.01168 11.9678 5.75493C11.3436 5.49818 10.6749 5.36736 10 5.37ZM10 13.83C9.34139 13.83 8.69757 13.6347 8.14995 13.2688C7.60234 12.9029 7.17552 12.3828 6.92348 11.7743C6.67144 11.1659 6.6055 10.4963 6.73398 9.85035C6.86247 9.20439 7.17963 8.61104 7.64533 8.14533C8.11104 7.67963 8.70439 7.36247 9.35035 7.23398C9.99631 7.1055 10.6659 7.17144 11.2743 7.42348C11.8828 7.67552 12.4029 8.10234 12.7688 8.64995C13.1347 9.19757 13.33 9.84139 13.33 10.5C13.33 10.9373 13.2439 11.3703 13.0765 11.7743C12.9092 12.1784 12.6639 12.5454 12.3547 12.8547C12.0454 13.1639 11.6784 13.4092 11.2743 13.5765C10.8703 13.7439 10.4373 13.83 10 13.83Z" />
              </g>
            </svg>
          </a>
          <a href="https://twitter.com/ola_onafowope">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path d="M20 2.30021C19.2483 2.6263 18.4534 2.84187 17.64 2.94021C18.4982 2.42753 19.1413 1.62099 19.45 0.67021C18.6436 1.15027 17.7608 1.48851 16.84 1.67021C16.2245 1.00278 15.405 0.558506 14.5098 0.407061C13.6147 0.255616 12.6945 0.405568 11.8938 0.833399C11.093 1.26123 10.4569 1.94274 10.0852 2.77105C9.71355 3.59935 9.62729 4.5276 9.84 5.41021C8.20943 5.32774 6.61444 4.90316 5.15865 4.16407C3.70287 3.42498 2.41885 2.3879 1.39 1.12021C1.02914 1.75038 0.839519 2.46403 0.84 3.19021C0.83872 3.86459 1.00422 4.52883 1.32176 5.12377C1.63929 5.71872 2.09902 6.22592 2.66 6.60021C2.00798 6.58247 1.36989 6.40751 0.8 6.09021V6.14021C0.804887 7.0851 1.13599 7.9993 1.73731 8.72818C2.33864 9.45705 3.17326 9.95585 4.1 10.1402C3.74326 10.2488 3.37287 10.306 3 10.3102C2.74189 10.3072 2.48442 10.2838 2.23 10.2402C2.49391 11.053 3.00462 11.7634 3.69107 12.2724C4.37753 12.7814 5.20558 13.0638 6.06 13.0802C4.6172 14.2155 2.83588 14.8351 1 14.8402C0.665735 14.8413 0.331736 14.8213 0 14.7802C1.87443 15.9905 4.05881 16.6329 6.29 16.6302C7.82969 16.6462 9.35714 16.3552 10.7831 15.7743C12.2091 15.1934 13.505 14.3341 14.5952 13.2467C15.6854 12.1593 16.548 10.8656 17.1326 9.44112C17.7172 8.01663 18.012 6.48994 18 4.95021V4.42021C18.7847 3.83502 19.4615 3.11763 20 2.30021Z" />
              </g>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

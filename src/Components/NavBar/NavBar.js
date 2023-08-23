import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import style from "../../Components/NavBar/NavBar.module.scss";
import "./NavBar.css";

import { useTranslation } from "react-i18next";

import { ReactComponent as Logo } from "../../Assets/IntaroLogo.svg";
import logoMobile from "../../Assets/IntaroLogo.svg";

import Background from "../../Assets/background.jpg";
import BackgroundTablet from "../../Assets/backgroundTablet.jpg";
import BackgroundMobile from "../../Assets/backgroundMobile.jpg";
import BackgroundMobileSmall from "../../Assets/backgroundMobileSmall.jpg";
import BackgroundSmallMonitor from "../../Assets/backgroundSmallMonitor.jpg";
import BackgroundVerrySmallMonitor from "../../Assets/backgroundVerrySmallMonitor.jpg";

const NavBarMenu = () => {
  const logoMobileRef = useRef(null);

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");

    if (!logoMobileRef.current) {
      const logoMobileImg = document.createElement("img");
      logoMobileImg.src = logoMobile;
      logoMobileImg.alt = "Logo Mobile";
      logoMobileImg.classList.add("LogoMobile");
      navbarToggler.insertBefore(logoMobileImg, navbarToggler.firstChild);
      logoMobileRef.current = logoMobileImg;
    }
  }, []);

  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [backgroundImage, setBackgroundImage] = useState(Background);

  // Update the background image based on screen width
  const updateBackgroundImage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 410) {
      setBackgroundImage(BackgroundMobileSmall);
    } else if (screenWidth <= 570) {
      setBackgroundImage(BackgroundMobile);
    } else if (screenWidth <= 768) {
      setBackgroundImage(BackgroundTablet);
    } else if (screenWidth <= 1000) {
      setBackgroundImage(BackgroundVerrySmallMonitor);
    } else if (screenWidth <= 1200) {
      setBackgroundImage(BackgroundSmallMonitor);
    } else {
      setBackgroundImage(Background);
    }
  };

  // Attach the event listener when the component mounts
  useEffect(() => {
    updateBackgroundImage(); // Initial call to set background based on screen size
    window.addEventListener("resize", updateBackgroundImage);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" className="fixed-top">
      <div className={style.fixedBackgroundContainer}>
      <img
        src={backgroundImage}
        alt="background"
        className={style.fixedBackground}
      />
      </div>
    
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav className={style.navbarContainer}>
          <div className={style.navLinksLeft}>
            <NavLink eventKey="1" as={Link} to="/">
              <Logo />
            </NavLink>
          </div>
          <div className={style.navLinkRight}>
           <div>
           <NavLink eventKey="2" as={Link} to="/contact">
              contact
            </NavLink>
           </div>
         

            {/* Language area */}
            <div className={style.languageBtn}>
              <label className="languageLabel">
                <input
                  type="radio"
                  name="language"
                  value="ro"
                  onChange={() => handleLanguageChange("ro")}
                />{" "}
                 <label className="languageLabel">ro</label>
              </label>{" "}
              <span style={{color:"#fff"}}>{" "} / {" "}</span>
              <label className="languageLabel">
                <input
                  type="radio"
                  name="language"
                  value="en"
                  defaultChecked
                  onChange={() => handleLanguageChange("en")}
                />{" "}
                <label className="languageLabel">en</label>
              </label>
              {/* Add more language options as needed */}
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMenu;

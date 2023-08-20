import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import style from "../../Components/NavBar/NavBar.module.scss";
import "./NavBar.css";

import { useTranslation } from "react-i18next";

import { ReactComponent as Logo } from "../../Assets/IntaroLogo.svg";
import logoMobile from "../../Assets/IntaroLogo.svg";

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

  //   //Scroll to the notification aria
  //   const handleContactLinkClick = () => {
  //     window.scrollTo(0, 2000);
  //     // Search for the input with class "notificationInput"
  //     setTimeout(()=>{
  //       const notificationInput = document.querySelector(".notificationInput");

  //       // Check if the input element is found
  //       if (notificationInput) {
  //         // Set focus on the input element
  //         notificationInput.focus();

  //         // Type some text into the input element
  //         notificationInput.value = "";
  //     }
  //     },500);
  //   };

  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" className="fixed-top">
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
                  defaultChecked
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

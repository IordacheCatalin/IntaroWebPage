import React, { useState, useEffect } from "react";
import Styles from "./Home.module.scss";

import BoxContainer from "../../Components/BoxContainer/BoxContainer.js";
import BoxContainer2 from "../../Components/BoxContainer/BoxContainer2.js";
import BoxContainer3 from "../../Components/BoxContainer/BoxContainer3.js";
import Contact from "../Contact/Contact.js";

import { useTranslation } from "react-i18next";

import Background from "../../Assets/background.jpg";
import BackgroundTablet from "../../Assets/backgroundTablet.jpg";
import BackgroundMobile from "../../Assets/backgroundMobile.jpg";
import BackgroundMobileSmall from "../../Assets/backgroundMobileSmall.jpg";
import BackgroundSmallMonitor from "../../Assets/backgroundSmallMonitor.jpg";
import BackgroundVerrySmallMonitor from "../../Assets/backgroundVerrySmallMonitor.jpg";

const Home = () => {
  const { t } = useTranslation("global");

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
    <>
      <img
        src={backgroundImage}
        alt="background"
        className={Styles.fixedBackground}
      />

      <div className={Styles.Container}>
        <div className={Styles.Contain}>
          <div className={Styles.HomeText}>{t("Home.Text01")}</div>
        </div>
        <div className={Styles.BoxOne}>
          <BoxContainer />
        </div>

        <div className={Styles.BoxTwo}>
          <BoxContainer2 />
          <div style={{ height: "200px", width: "100%" }}></div>
        </div>

        <div className={Styles.BoxFour}>
          <BoxContainer3 />
          <div></div>
        </div>

        <div className={Styles.BoxThree}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;

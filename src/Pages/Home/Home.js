import Styles from "./Home.module.scss";

import BoxContainer from "../../Components/BoxContainer/BoxContainer.js";
import BoxContainer2 from "../../Components/BoxContainer/BoxContainer2.js";
import Contact from "../Contact/Contact.js";

import { useTranslation } from "react-i18next";

// import Background from "../../Assets/background.jpg"

const Home = () => {
  const { t } = useTranslation("global");

  return (
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

      <div className={Styles.BoxThree}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;

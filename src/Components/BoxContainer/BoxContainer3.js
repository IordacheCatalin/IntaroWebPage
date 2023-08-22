import Styles from "./BoxContainer.module.scss";
import Style from "./SmallBox.module.scss";

import { useTranslation } from "react-i18next";

import { ReactComponent as HartaRomania } from "../../Assets/harta.svg";

const BoxContainer = () => {
  const { t } = useTranslation("global");
  return (
    <div className={`${Styles.Container} ${Styles.BoxContainer3}`}>
      <div className={`${Styles.Contain} ${Styles.BoxContainer3}`}>
        <div className={`${Styles.InfoBoxContainer} ${Styles.BoxContainer3}`}>
          <div className={Styles.BoxContainer3TextAlign}>
            <div className={Styles.BoxContainer3Text}>
              <div className={Style.Title}>{t("Home.Text15")}</div>
              <div className={Style.Text}>{t("Home.Text16")}</div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className={Styles.BoxContainer3Text}>
              <div className={Style.Title}>{t("Home.Text17")}</div>
              <div className={Style.Text}>{t("Home.Text18")}</div>
            </div>
          </div>
          <HartaRomania className={Styles.harta}/>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;

import Styles from "./BoxContainer.module.scss";

import { useTranslation } from "react-i18next";

import SmallBoxContainer from "./SmallBoxContainer";

import AxeriaLogo from "../../Assets/AxeriaLogo.png";

const BoxContainer = () => {
  const { t } = useTranslation("global");
  return (
    <div className={Styles.Container}>
      <div className={Styles.Contain} style={{marginTop:"30px"}}>
        <div className={Styles.InfoBoxContainer}>
          <SmallBoxContainer title={t("Home.Text15")} text={t("Home.Text16")} height="100px" padding="10px 0px 10px 0px" displaytext2="none"/>
          <SmallBoxContainer title={t("Home.Text17")} text={t("Home.Text18")} height="100px" padding="10px 0px 10px 0px" displaytext2="none"/>
          <SmallBoxContainer title={t("Home.Text19")} text={t("Home.Text20")} height="100px" padding="10px 0px 10px 0px" displaytext2="none"/>
        </div>
        <div className={Styles.InfoBoxContainer} >
          <SmallBoxContainer title={t("Home.Text21")} text={t("Home.Text23")} textBold={t("Home.Text22")} textBold2={t("Home.Text24")} text2={t("Home.Text25")} height="170px" padding="30px 0px 0px 0px" padding2="0px 0px 20px 0px" />
          <SmallBoxContainer title={t("Home.Text26")} text={t("Home.Text27")} height="170px" padding="30px 0px 0px 0px" padding2="0px 0px 20px 0px"/>
        </div>
        <div className={Styles.partenerContainer}>
          <img src={AxeriaLogo} alt="Axeria logo" />
          <span className={Styles.parternerText}>partener</span>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;

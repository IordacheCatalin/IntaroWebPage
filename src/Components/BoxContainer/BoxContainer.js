import Styles from "./BoxContainer.module.scss";

import { useTranslation } from "react-i18next";

import SmallBoxContainer from "./SmallBoxContainer";

const BoxContainer = () => {
  const { t } = useTranslation("global");
  return (
    <div className={Styles.Container}>
      <div className={Styles.Contain}>
        <div className={Styles.InfoBoxTitle}>{t("Home.Text02")}</div>
        <div className={Styles.InfoBoxContainer}>
          <SmallBoxContainer title={t("Home.Text03")} text={t("Home.Text04")} height="82px"/>
          <SmallBoxContainer title={t("Home.Text05")} text={t("Home.Text06")} height="82px"/>
          <SmallBoxContainer title={t("Home.Text07")} text={t("Home.Text08")} height="82px"/>
        </div>
        <div className={Styles.InfoBoxContainer}>
          <SmallBoxContainer title={t("Home.Text09")} text={t("Home.Text10")} height="82px"/>
          <SmallBoxContainer title={t("Home.Text11")} text={t("Home.Text12")} height="82px"/>
          <SmallBoxContainer title={t("Home.Text13")} text={t("Home.Text14")} height="82px"/>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;

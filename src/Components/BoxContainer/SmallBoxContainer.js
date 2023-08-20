import Styles from "./SmallBox.module.scss";

import { useTranslation } from "react-i18next";

const SmallBoxContainer = (props) => {
  const { t } = useTranslation("global");
  return (
    <div className={Styles.SmallContainer} style={{minHeight:props.height}}>
      <div className={Styles.Title} style={{padding:props.padding}}>{props.title}</div>
      <div className={Styles.Text} style={{padding:props.padding}}><strong>{props.textBold}</strong>{props.text}</div>
      <div className={Styles.Text} style={{padding:props.padding2,display:props.displaytext2}}><strong>{props.textBold2}</strong>{props.text2}</div>
    </div>
  );
};

export default SmallBoxContainer;

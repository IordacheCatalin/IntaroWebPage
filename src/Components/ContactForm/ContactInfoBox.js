import Styles from "./ContactInfoBox.module.scss";

import { useTranslation } from "react-i18next";
import { ReactComponent as PhoneIcon } from "../../Assets/phone-solid.svg";
import { ReactComponent as Email } from "../../Assets/mailSlimIcon.svg";

const ContactInfoBox = () => {
  const { t } = useTranslation("global");

  return (
    <div className={Styles.Container}>
      <h3 className={Styles.Title}>{t("Contact.Text09")}</h3>
      <div className={Styles.textGroup}>
        <div className={Styles.textIconGroup}>
          <PhoneIcon style={{opacity:"0.8"}} />
          <span className={Styles.text}>{t("Contact.Text10")}</span>
          <tel href="tel:0219110" className={Styles.text}>
            <span className={Styles.textBold}>021.9110</span>
          </tel>
        </div>
        <div className={Styles.textGroup}>
          <span className={Styles.text} style={{marginLeft:"39px"}}>{t("Contact.Text11")}</span>
        </div>
        <div className={Styles.textIconGroup}>
          <Email />
          <span className={Styles.text}>customer.care@intaro.ro</span>
        </div>
      </div>

      <div className={Styles.textGroup2}>
        <h3 className={Styles.Title}>{t("Contact.Text12")}</h3>
        <div className={Styles.textIconGroup}>
          <Email />
          <span className={Styles.text}>daune@intaro.ro</span>
        </div>
      </div>

      <div>
        <h3 className={Styles.Title}>{t("Contact.Text13")}</h3>

        <div className={Styles.textIconGroup}>
          <Email />
          <span className={Styles.text}>hr@intaro.ro</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBox;

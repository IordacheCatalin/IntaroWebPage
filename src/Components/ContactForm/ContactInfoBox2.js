import Styles from "./ContactInfoBox.module.scss";

import { useTranslation } from "react-i18next";
import { ReactComponent as PhoneIcon } from "../../Assets/phone-solid.svg";
import { ReactComponent as Email } from "../../Assets/mailSlimIcon.svg";

const ContactInfoBox2 = () => {
  const { t } = useTranslation("global");

  return (
    <div className={Styles.Container}>
      <h3 className={Styles.Title}>{t("Contact.Text14")}</h3>
      <div className={Styles.textGroup}>
        <div>
          <p className={Styles.text}>
            Bucureşti Sectorul 1, Bulevardul Ion Ionescu de la Brad, Nr. 1A,
            Etaj II, 013811
          </p>
        </div>
        <div className={Styles.textIconGroup}>
          <Email />
          <span className={Styles.text}>office@intaro.ro</span>
        </div>
      </div>

      <div className={Styles.textGroup3}>
        <h3 className={Styles.Title}>{t("Contact.Text15")}</h3>

        <div>
          <p className={Styles.text}>
            Tîrgu Mureş, Strada Crinului, Nr. 2, Județ Mureş, 540337
          </p>
        </div>
        <div>
          <p className={Styles.text}>
            J26/113/2017 CUI RO36983327 Subscribed share capital: 900000 ron
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBox2;

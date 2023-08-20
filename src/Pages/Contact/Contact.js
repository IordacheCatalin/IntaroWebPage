import Styles from "../Contact/Contact.module.scss";

import ContactForm from "../../Components/ContactForm/ContactForm.js";
import ContactInfoBox from "../../Components/ContactForm/ContactInfoBox.js";
import ContactInfoBox2 from "../../Components/ContactForm/ContactInfoBox2.js";

const Contact = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Contain}>
        <div className={Styles.title}>
          <h1>Contact</h1>
        </div>
        <div className={Styles.boxContain}>
          <div className={Styles.contactBoxOne}>
            <ContactForm />
          </div>
          <div className={Styles.contactBoxTwo}>
            <ContactInfoBox />
          </div>
          <div className={Styles.contactBoxThree}>
            <ContactInfoBox2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

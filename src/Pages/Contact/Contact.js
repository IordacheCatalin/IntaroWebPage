import Styles from "../Contact/Contact.module.scss";

import ContactComponent from "../../Components/Contact/ContactComponent.js";

const Contact = () => {
  return (
    <div className={Styles.contactContainer}>
      <ContactComponent />      
    </div>
  );
};

export default Contact;

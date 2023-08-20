import React from "react";
import "../Footer/Footer.css";
import { ReactComponent as Logo } from "../../Assets/IntaroLogo.svg";

const Footer = () => {
  return (
    <footer className="page-footer fixed-bottom">
      <div className="container-fluid text-center text-md-left">
        <div className="col-md-12 text-start">
          <h6 className="footer-text">© 2022 Newto. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

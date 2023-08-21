import React from "react";
import "../Footer/Footer.css";
import { ReactComponent as Logo } from "../../Assets/IntaroLogo.svg";

const Footer = () => {
  return (
    <footer className="page-footer fixed-bottom">
      <div className="container-fluid text-center text-md-left">
        <div className="footerContent">
          <div className="logo">
            <Logo className="logo-svg"/>
          </div>
          
          <h6 className="footer-text">© 2023 Intaro Insurance. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

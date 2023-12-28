import React from "react";
import "./Footer.css";
import logo from "../../assets/clubhub_logo_tp.png";

const Footer = () => {
   return (
      <div className="footer-container">
         <img className="logo-image" src={logo} alt="logo" />
         <p>description</p>
         <img className="logo-image" src={logo} alt="logo" />
      </div>
   );
};

export default Footer;

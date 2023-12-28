import React from "react";
import "./Header.css";
import logo from "../../assets/clubhub_logo_tp.png";

const Header = () => {
   return (
      <div className="header-container">
         <img className="logo-image" src={logo} alt="logo" />
         <p>navigation</p>
         <p>user login</p>
      </div>
   );
};

export default Header;

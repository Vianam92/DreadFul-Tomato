import React from 'react'
import "../../stylesheet/Footer.scss";
import logo from "../../assets/logo.png";
import appstore from "../../assets/app store.png";
import googleplay from "../../assets/google-play.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer__logo"/>
      <nav>
        <ul className="nav">
          <li className="nav__list">Home</li>
          <li className="nav__list">Term of Use</li>
          <li className="nav__list">Legal Notices</li>
          <li className="nav__list">Help</li>
          <li className="nav__list">Manage Accout</li>
        </ul>
      </nav>
      <div className="footer__images-section">
        <img src={appstore} alt="app store" className="footer__images-section--img"/>
        <img src={googleplay} alt="google play" className="footer__images-section--img" />
      </div>
      <small className="footer__small">
        Copyright 2020 Dreadfull Tomato Streaming All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;

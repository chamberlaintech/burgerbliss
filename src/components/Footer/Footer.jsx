import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer section-padding">
      <div className="footer-content">
        <div className="footer-content-hours">
          <h3 className="h3-text">Opening hours</h3>
          <p className="footer-text">Monday - Friday:</p>
          <p className="footer-text">10.00 am - 10.00 pm</p>
          <p className="footer-text">Saturday - Sunday</p>
          <p className="footer-text">11.00 am - 12.00 pm</p>
        </div>
        <div className="footer-content-contact">
          <h3 className="h3-text">Contact Us</h3>
          <p className="footer-text">1234 Burger Lane, Flavor Town, FT 56789</p>
          <p className="footer-text">(555) 123-4567</p>
          <div className="footer-logo">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-text">2024 Burger Bliss. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

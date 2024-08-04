import React from "react";
import image5 from "../../assets/image5.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact wrapper section-padding" id="contact">
      <div className="wrapper-info">
        <h5 className="subheading-text">Contact us</h5>
        <h2 className="h2-text" style={{ marginBottom: "2rem" }}>
          Get in touch
        </h2>
        <div className="contact-content">
          <h4 className="h4-text">Address</h4>
          <p>1234 Burger Lane, Flavor Town, FT 56789</p>
          <h4 className="h4-text">Email</h4>
          <p>info@burgerbliss.com</p>
          <h4 className="h4-text">Phone</h4>
          <p>(555) 123-4567</p>
        </div>
      </div>
      <div className="contact-img">
        <img src={image5} alt="beer" />
      </div>
    </div>
  );
};

export default Contact;

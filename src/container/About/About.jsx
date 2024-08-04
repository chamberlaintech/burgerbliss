import React from "react";
import "./About.css";
import image2 from "../../assets/image2.jpg";

const About = () => {
  return (
    <div className="about flex-center section-padding" id="about">
      <div className="about-content">
        <div className="about-content-aboutus">
          <h2 className="h2-text">About us</h2>
          <p className="p-poppins">
            At Burger Bliss, we’re dedicated to crafting the ultimate burger
            experience. We use only the freshest ingredients to create
            delicious, high-quality burgers that satisfy every craving, every
            single time.
          </p>
          <button className="primary-button">See More</button>
        </div>
        <div className="about-img flex-center">
          <img src={image2} alt="about-us-image" />
        </div>
        <div className="about-content-promise">
          <h2 className="h2-text">Our promise</h2>
          <p className="p-poppins">
            Welcome! Our burgers are made with passion and precision. Enjoy the
            finest ingredients and innovative recipes, crafted to perfection
            just for you. Experience unmatched quality and taste.
          </p>
          <button className="primary-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default About;

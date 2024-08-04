import React from "react";
import "./Hero.css";
import image1 from "../../assets/image1.jpg";

const Hero = () => {
  return (
    <div className="hero wrapper section-padding" id="home">
      <div className="wrapper-info">
        <h5 className="subheading-text">Bite into happiness</h5>
        <h1 className="h1-text">Welcome to burger bliss</h1>
        <p className="p-poppins">
          Experience the ultimate burger delight at Burger Bliss. Our
          mouth-watering creations are made with the juiciest patties, freshest
          ingredients, and a dash of culinary magic. Join us for a burger
          experience that’s guaranteed to satisfy your cravings and leave you
          wanting more.
        </p>
      </div>
      <div className="hero-img">
        <img src={image1} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li className="p-poppins">
          <a href="#home">Home</a>
        </li>
        <li className="p-poppins">
          <a href="#about">About</a>
        </li>
        <li className="p-poppins">
          <a href="#menu">Menu</a>
        </li>
        <li className="p-poppins">
          <a href="#reservation">Reservation</a>
        </li>
        <li className="p-poppins">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-button">
        <button className="primary-button">Book a Table</button>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          onClick={() => setToggleMenu(true)}
          className="overlay-open"
        />

        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <MdClose
              fontSize={28}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-smallscreen-links">
              <li className="p-poppins">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p-poppins">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p-poppins">
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li className="p-poppins">
                <a href="#reservation" onClick={() => setToggleMenu(false)}>
                  Reservation
                </a>
              </li>
              <li className="p-poppins">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

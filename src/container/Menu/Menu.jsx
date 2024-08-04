import React from "react";
import burgers from "../../constants/data";
import image3 from "../../assets/image3.jpg";
import MenuItem from "../../components/MenuItem/MenuItem";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu flex-center section-padding" id="menu">
      <div className="menu-title">
        <h5 className="subheading-text">Enjoy Our Handcrafted Creations</h5>
        <h2 className="h2-text">Signature Selections</h2>
      </div>
      <div className="menu-content">
        <div className="menu-img">
          <img src={image3} alt="menu-image" />
        </div>
        <div className="menu-items">
          {burgers.map((burger, index) => {
            return (
              <MenuItem
                key={burger.title + index}
                title={burger.title}
                price={burger.price}
                desc={burger.desc}
              />
            );
          })}
        </div>
      </div>
      <button className="secondary-button">Menu</button>
    </div>
  );
};

export default Menu;

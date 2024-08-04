import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, desc }) => {
  return (
    <div className="menuitem">
      <div className="menuitem-head">
        <div className="menuitem-name">
          <h4 className="h4-text">{title}</h4>
        </div>
        <div className="menuitem-dash"></div>
        <div className="menuitem-price">
          <h4 className="h4-text">{price}</h4>
        </div>
      </div>
      <div className="menuitem-desc">
        <p className="menuitem-desc-text">{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;

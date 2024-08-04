import React from "react";
import "./Reserving.css";

const Reserving = () => {
  return (
    <div className="reserving flex-center" id="reservation">
      <div className="reserving-content">
        <h2 className="h2-text">Reserve your table</h2>
        <p className="p-poppins">
          Don’t miss out! Book your spot today for an unforgettable burger
          experience.
        </p>
        <button className="tertiary-button">Book</button>
      </div>
    </div>
  );
};

export default Reserving;

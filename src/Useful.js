import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import details from "./img/details.png";

export default function UsefulDetails() {
  return (
    <div className="Useful">
      <NavBar />
      <div className="date mt-5">
        September 10, 2023 <br /> Austin, Texas
      </div>
      <div className="details-div">
        <img src={details} alt="party details" className="details-image" />
      </div>
    </div>
  );
}

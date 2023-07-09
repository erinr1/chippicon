import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import details from "./img/details.png";
import Footer from "./Footer";

export default function UsefulDetails() {
  return (
    <div className="Useful">
      <NavBar />
      <div className="details-div">
        <img src={details} alt="party details" className="details-image" />
      </div>
      <Footer />
    </div>
  );
}

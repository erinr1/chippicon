import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import details from "./img/details.png";
import raffle from "./img/raffle.png";

import Footer from "./Footer";

export default function UsefulDetails() {
  return (
    <div className="Useful">
      <NavBar />
      <div className="details-div">
        <img src={details} alt="party details" className="raffle-image" />
        <img
          src={raffle}
          alt="raffle information"
          className="details-image mt-5"
        />
        <ul className="faq-list mt-3">
          <span class="faq">FAQ</span>
          <li> Do I need a ticket to attend Chippicon?</li> Chippicon 2023 is a
          free event. No tickets are required.
          <li>Do I need to RSVP to attend Chippicon 2023?</li> No RSVP is
          required. Chippicon 2023 is an open event.
          <li>What should I bring to to the event?</li> Wear your Chippi costume
          (not required but STRONGLY encouraged) and cash for the Chippicon 2023
          raffle and food/drink.
          <li>Can I bring my non-Chippi holder friends?</li> Yes! All are
          welcome who may be interested in joining or hanging with the Chippi
          community.
        </ul>
      </div>

      <Footer />
    </div>
  );
}

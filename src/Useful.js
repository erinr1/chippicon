import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import whiskeybar from "./img/whiskeybar.jpg";

export default function UsefulDetails() {
  return (
    <div className="Useful">
      <NavBar />
      <div class="container text-center"></div>
      <div class="row justify-content-center">
        <div class="col-6 mt-2">
          <img src={whiskeybar} alt="chippi crowd" className="whiskey-bar" />

          <div className="location-info text-center ">
            <span>Location: 2203 Larimer Street, Denver, CO</span>
            <br />
            <span>Date/Time: Wednesday, Feb. 26, 2025 6-10pm</span>
          </div>
        </div>
        <div class="col-6 mt-2">
          <ul className="info-list">
            <li>🆓 Free Admission!</li>
            <li>
              🔥 Dress like your Chippi! Show up in your best Chippi-inspired
              outfit and rep your unique style.
            </li>
            <li>🎟️ Raffle for prizes!</li>
            <ul>
              <li>$10 per ticket, or 5 for $40.</li>
              <li>
                Pay with cash or crypto (Optimism, Arbitrum, Gnosis, Ethereum,
                Polygon).
              </li>
              <li>All proceeds go to 🏴 Black Flag DAO & Chippicon 3.</li>
            </ul>

            <li>
              📚 Grab a copy of What is Chippi? for $20 and get it 🖊️ signed by
              the illustrator!
            </li>
            <li>🖼️ Collect exclusive Chippi POAPs & stickers.</li>
            <li>🎲 Play Chippi Bingo for a shot at some epic prizes!</li>
          </ul>
        </div>
      </div>
      <div className="details-div">
        <ul className="faq-list mt-3">
          <span class="faq">FAQ</span>
          <li> Do I need a ticket to attend Chippicon?</li> Chippicon 2025 is a
          free event. No tickets are required.
          <li>Do I need to RSVP to attend Chippicon 2025?</li> No RSVP is
          required. Chippicon 2025 is an open event.
          <li>What should I bring to to the event?</li> Wear your Chippi costume
          (not required but STRONGLY encouraged) and cash for drinks.
          <li>How can I participate in the raffle?</li> Payment options for the
          Chippicon 2025 raffle include cash or crypto (Optimism, Arbitrum,
          Gnosis, Ethereum, Polygon).
          <li>Can I bring my non-Chippi holder friends?</li> Yes! All are
          welcome who may be interested in joining or hanging with the Chippi
          community.
        </ul>
      </div>
      <Footer />
    </div>
  );
}

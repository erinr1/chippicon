import React from "react";
import chippiIcon from "./img/chippi.png";
import "./App.css";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-md bg-body-tertiary ">
      <div class="container-fluid">
        <a class="navbar-brand navbar-links" href="#">
          <img src={chippiIcon} alt="chippi icon" width={40} class="me-2" />
          ChippiCon 2023
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active navbar-links"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-links" href="#">
                Useful Details
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-links">The OpenSea</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

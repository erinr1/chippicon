import React from "react";
import chippiIcon from "./img/chippi.png";
import "./App.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid">
        <a class="navbar-brand navbar-links me-5" href="/#">
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
              <a class="nav-link " href="/#">
                {" "}
                <Link to="/useful">
                  <span className="navbar-links">Useful Details</span>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/#">
                <Link to="/useless">
                  <span className="navbar-links">Useless Details</span>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link navbar-links"
                href="https://linktr.ee/chippinft"
              >
                Chippi LinkTree
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link navbar-links"
                href="https://opensea.io/collection/chippi"
              >
                The OpenSea
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

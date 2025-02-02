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
          ChippiCon
        </a>
        <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon navbar-dark"></span>
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
              <a
                class="nav-link navbar-links"
                href="https://linktr.ee/chippinft"
                target="_blank"
                rel="noreferrer"
              >
                Chippi LinkTree
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link navbar-links"
                href="https://opensea.io/collection/chippi"
                target="_blank"
                rel="noreferrer"
              >
                The OpenSea
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link navbar-links"
                href="https://www.amazon.com/dp/B0DRZHHM3X/ref=sr_1_1?crid=JGJJ8AGYQUL6&dib=eyJ2IjoiMSJ9.u4Q1DIFW_Ezww2MSsYlHlVnBemoS3Nmvm7jeovBClR7eLrXk4sw8Wh-z2EKtzXa8jNF1FXAS-adgp1aZuCyzlSI_C_jj7MjE3C1xZp1d1NY.WUvuxMrC77B9pLWPrDvBThlGxpJaH_Xqz6bAJvwVPzY&dib_tag=se&keywords=what+is+chippi&qid=1735788078&sprefix=what+is+chippi%2Caps%2C122&sr=8-1"
                target="_blank"
                rel="noreferrer"
              >
                What Is Chippi? Book
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

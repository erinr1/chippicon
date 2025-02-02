import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import chippi1 from "./img/chippi1.png";
import chippi2 from "./img/chippi2.png";
import chippicon2025 from "./img/chippicon2025.jpg";

import Footer from "./Footer";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <div className="homepage-div">
        <img
          src={chippi1}
          alt="chippi crowd"
          className="d-none background-left "
        />
        <img src={chippicon2025} className="chippi-2025" alt="Chippicon 2025" />
        <img
          src={chippi2}
          alt="chippi crowd"
          className="d-none background-right"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

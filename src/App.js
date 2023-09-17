import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import chippi1 from "./img/chippi1.png";
import chippi2 from "./img/chippi2.png";
import chippicon2023 from "./img/chippicon2023.jpeg";

import Footer from "./Footer";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <div className="">
        <img src={chippi1} alt="chippi crowd" className="background-left " />
        <img src={chippicon2023} className="austin" alt="Chippicon 2023" />
        <img src={chippi2} alt="chippi crowd" className="background-right" />
      </div>
      <div className="next-year">
        Stay tuned for ChippiCon 2024 - Location TBD
      </div>
      <Footer />
    </div>
  );
}

export default App;

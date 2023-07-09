import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import chippi1 from "./img/chippi1.png";
import chippi2 from "./img/chippi2.png";
import txchippi from "./img/txchippi.png";

import Footer from "./Footer";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <div className="">
        <img src={chippi1} alt="chippi crowd" className="background-left " />
        <img src={txchippi} className="austin" alt="texas" />
        <img src={chippi2} alt="chippi crowd" className="background-right" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

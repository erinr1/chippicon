import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import background from "./img/background.png";
import chippi1 from "./img/chippi1.png";
import chippi2 from "./img/chippi2.png";
import austin from "./img/austin.png";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <div className="">
        <img src={chippi1} alt="chippi crowd" className="background-left " />
        <img src={austin} className="austin" alt="texas" />
        <img src={chippi2} alt="chippi crowd" className="background-right" />
      </div>
    </div>
  );
}

export default App;

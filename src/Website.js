import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Useful from "./Useful";
import Useless from "./Useless";

export default function Website() {
  return (
    <div className="Website">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/useful" element={<Useful />} />
        <Route path="/useless" element={<Useless />} />
      </Routes>
    </div>
  );
}

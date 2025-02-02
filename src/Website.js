import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Useful from "./Useful";

export default function Website() {
  return (
    <div className="Website">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/useful" element={<Useful />} />
      </Routes>
    </div>
  );
}

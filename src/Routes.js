import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<Game />} />
    </Routes>
  );
}

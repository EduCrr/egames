import React from "react";
import "./App.css";
import Rotas from "./Routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

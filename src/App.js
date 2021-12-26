import React from "react";
import "./App.css";
import Rotas from "./Routes";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

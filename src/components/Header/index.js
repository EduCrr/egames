import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";
export default function Header() {
  return (
    <HeaderArea>
      <nav>
        <div className="logo">E-GAMES</div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Categorias</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderArea>
  );
}

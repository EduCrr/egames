import React from "react";
import { FooterArea } from "./styled";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <FooterArea>
      <div className="content">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
          </ul>
        </nav>
        <div className="footerInfo">
          <strong>Feito por:</strong> Eduardo Carraro
          {" | "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://rawg.io/"
            target="_blank"
          >
            Rawg
          </a>
        </div>
      </div>
    </FooterArea>
  );
}

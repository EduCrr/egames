import React from "react";
import { FooterArea } from "./styled";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <FooterArea>
      <div className="content">
        <div className="offer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Games</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="footerInfo">
          <strong>Feito por:</strong> Eduardo Carraro
        </div>
      </div>
    </FooterArea>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";
export default function Header() {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <>
      <div
        className="menuBackground"
        style={{
          background: blackHeader ? "#1c1c1c" : "transparent",
          height: blackHeader ? "70px" : "0px",
          width: blackHeader ? "100%" : "0px",
          position: blackHeader ? "fixed" : "none",
          zIndex: blackHeader ? "9" : "9",
          transition: "all ease 0.5s",
          top: 0,
          left: 0,
          right: 0,
        }}
      ></div>
      <HeaderArea menu={blackHeader}>
        <nav>
          <div className="logo">E-GAMES</div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
            </ul>
          </div>
        </nav>
      </HeaderArea>
    </>
  );
}

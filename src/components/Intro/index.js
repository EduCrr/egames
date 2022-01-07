import React from "react";
import { Link } from "react-router-dom";
import { IntroArea } from "./styled";
export default function Intro() {
  return (
    <IntroArea>
      <div className="intro">
        <div className="leftSide">
          <h1>Games Catalog</h1>
          <p style={{ marginBottom: "35px" }}>
            With over 1300 Games, Editions and Add-ons discounted during Holiday
            Sale, you're sure to discover something you'll love this season!
          </p>
          <Link to="/games" className="equal">
            More
          </Link>
        </div>
        <div className="rightSide">
          <div className="photo1">
            <img alt="uncharted" src="/assets/uncharted.jpg" />
          </div>
          <div className="double">
            <div className="photo2">
              <img alt="ghost" src="/assets/ghost.jpg" />
            </div>
            <div className="photo3">
              <img alt="tomb raider" src="/assets/tombraider.jpg" />
            </div>
          </div>
        </div>
      </div>
    </IntroArea>
  );
}

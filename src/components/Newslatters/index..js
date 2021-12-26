import React from "react";
import { NewsArea } from "./styled";
export default function Newslatters() {
  return (
    <NewsArea>
      <div className="area">
        <div className="subArea">
          <h1>Subscribe to news</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form>
            <input placeholder="E-mail" type="email" required />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </NewsArea>
  );
}

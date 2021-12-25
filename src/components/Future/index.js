import React, { useEffect, useState } from "react";
import { FutureArea } from "./styled";
import Api from "../../Api";
export default function Future() {
  const [game, setGame] = useState({});
  const getUpcoming = async () => {
    let json = await Api.getFuture();
    let singleGame = Math.floor(Math.random() * json.results.length);
    let chosen = json.results[singleGame];
    setGame(chosen);
    console.log(chosen);
  };
  let g = [];
  for (let i in game.genres) {
    g.push(game.genres[i].name);
  }
  useEffect(() => {
    getUpcoming();
  }, []);
  return (
    <>
      <FutureArea>
        <div className="area">
          <div className="singleGame">
            <div className="info">
              <div className="photo">
                <img src={game.background_image} />
              </div>
              <div className="desc">
                <h1>Upcoming Games</h1>
                <h2>{game.name}</h2>
                <p style={{ margin: "10px 0px" }}>{game.released}</p>
                <div className="genres">
                  {g.map((item, k) => (
                    <p key={k}>{item}</p>
                  ))}
                </div>
                <button style={{ marginTop: "20px" }}>More</button>
              </div>
            </div>
          </div>
        </div>
      </FutureArea>
    </>
  );
}

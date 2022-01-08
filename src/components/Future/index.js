import React, { useEffect, useState } from "react";
import { FutureArea } from "./styled";
import Api from "../../Api";
import { Link } from "react-router-dom";
export default function Future() {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);

  const getUpcoming = async () => {
    setLoading(true);
    let json = await Api.getFuture();
    let randomGame = Math.floor(Math.random() * json.results.length);
    setGame(json.results[randomGame]);
    console.log(json.results[randomGame]);
    setLoading(false);
  };

  let g = [];
  for (let i in game.genres) {
    g.push(game.genres[i].name);
  }

  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <FutureArea>
      {loading ? (
        <div className="loadingSpan">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <div className="area">
          <div className="singleGame">
            <div className="info">
              <div className="photo">
                <img src={game.background_image} alt={game.name} />
              </div>
              <div className="desc">
                <h1>Upcoming Games</h1>
                <h2>{game.name}</h2>
                <p style={{ margin: "10px 0px" }}>{game.released}</p>
                <div className="genres" style={{ marginBottom: "35px" }}>
                  {g.map((item, k) => (
                    <p key={k}>{item}</p>
                  ))}
                </div>

                <Link className="equal" to={`/game/${game.id}`}>
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </FutureArea>
  );
}

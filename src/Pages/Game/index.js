import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameArea } from "./styled";
import Api from "../../Api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../components/Carousel";
import Loader from "../../components/Loader";
export default function Game() {
  const [loading, setLoading] = useState(false);
  const [loadingFeatured, setLoadingFeatured] = useState(false);
  const [game, setGame] = useState([]);
  const [images, setImages] = useState([]);
  const [same, setSame] = useState([]);
  const [showText, setShowText] = useState(false);
  const { id } = useParams();
  let lastIndex = null;
  const [achievements, setAchievements] = useState([]);

  const loadSingleGame = async () => {
    setLoadingFeatured(true);
    let json = await Api.getSingleGame(id);
    setGame(json);
    setLoadingFeatured(false);
    lastIndex = json.platforms.length - 1;
  };

  const loadScreenshots = async () => {
    setLoading(true);
    let json = await Api.getScreenshots(id);
    setImages(json.results);
    setLoading(false);
  };

  const loadAchievements = async () => {
    setLoading(true);
    let json = await Api.getAchievements(id);
    setAchievements(json);
    setLoading(false);
  };

  const loadSameGame = async () => {
    let json = await Api.getSameSeries(id);
    setSame(json.results);
  };

  let g = [];
  for (let i in game.genres) {
    g.push(game.genres[i].name);
  }
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    loadSingleGame();
    loadScreenshots();
    loadAchievements();
    loadSameGame();
    window.scrollTo(0, 0);
  }, []);

  return (
    <GameArea>
      {loadingFeatured ? (
        <Loader />
      ) : (
        <div
          className="cover"
          style={{
            backgroundImage: `linear-gradient(to top, #1c1c1c 1%, transparent 50%), url(${game.background_image})`,
          }}
        >
          <div className="initialInfo">
            <div className="genres">
              {g.length > 0 && g.map((item, k) => <p key={k}>{item}</p>)}
            </div>
            <h1>{game.name}</h1>
          </div>
          <div className="vote">{game.metacritic}</div>
        </div>
      )}

      <div className="description">
        <div className="photoSide">
          <div className="photo">
            <img src={game.background_image} />
          </div>
        </div>
        <div className="descSide">
          <h2 style={{ marginBottom: "15px" }}>About the game</h2>
          <div>
            <h3>Platforms</h3>

            {game.platforms &&
              game.platforms.map((item, k) => (
                <div style={{ display: "inline" }} key={k}>
                  {(k ? ", " : "") +
                    item.platform.name +
                    (k === lastIndex ? ". " : "")}
                </div>
              ))}
          </div>
          <div>
            <h3>Developer</h3>
            <p>{game.developers && game.developers[0].name}</p>
          </div>
          <div>
            <h3>Metacritic</h3>
            <p>{game.metacritic}/100</p>
          </div>
          <div>
            <h3>Released</h3>
            <p>{game.released}</p>
          </div>
        </div>
        <div className="achievements">
          {loading ? (
            <div className="loadingSpan">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <>
              {achievements.results && achievements.results.length > 0 ? (
                <>
                  <h2>Achievements</h2>
                  <div className="achievementsItems">
                    <Slider {...settings}>
                      {achievements.results &&
                        achievements.results.map((item, k) => (
                          <div className="items" key={k}>
                            <img src={item.image} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                          </div>
                        ))}
                    </Slider>
                  </div>
                </>
              ) : (
                <>
                  <h2>Achievements</h2>
                  <p>Not updated</p>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="desc">
        {game.description_raw && (
          <>
            {showText === true ? (
              <p>{game.description_raw}</p>
            ) : (
              <>
                <p>{game.description_raw.substr(0, 350) + "..."}</p>
                <button
                  style={{ margin: "15px auto" }}
                  onClick={() => setShowText(true)}
                >
                  Continue
                </button>
              </>
            )}
          </>
        )}
      </div>
      {loading ? (
        <div className="loadingSpan">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <div className="gridParent">
          {images &&
            images.map((item, k) => (
              <div className={`div${k + 1}`} key={k}>
                <img src={item.image} />
              </div>
            ))}
        </div>
      )}
      <div className="sameGames">
        {same && same.length > 0 ? (
          <>
            <h2>Same series</h2>
            {same && <Carousel data={same} />}
          </>
        ) : (
          <>
            <h2>Same series</h2>{" "}
            <p style={{ textAlign: "center" }}>Not updated</p>
          </>
        )}
      </div>
    </GameArea>
  );
}

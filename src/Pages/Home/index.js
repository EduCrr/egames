import React, { useEffect, useState } from "react";
import Featured from "../../components/Featured";
import Api from "../../Api";
import { HomeArea } from "./styled";
import CarouselIntro from "../../components/CarouselIntro";
import Carousel from "../../components/Carousel";
import Future from "../../components/Future";
import Newslatters from "../../components/Newslatters/index.";
export default function Home() {
  const [featured, setFeatured] = useState({});
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gameGenres, setGameGenres] = useState([]);
  const [genre, setGenre] = useState("4");
  const loadFeatured = async () => {
    try {
      setLoading(true);
      let json = await Api.getFeatured("58812");
      let jsonInfo = {
        id: json.id,
        photo: json.background_image,
        name: json.name,
        genres: json.genres,
        description: json.description_raw,
        metacritic: json.metacritic,
        released: json.released,
        developers: json.developers,
      };
      setFeatured(jsonInfo);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    loadFeatured();
  }, []);

  const loadGames = async () => {
    try {
      let json = await Api.getHomeList(genre);
      setGames(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  const loadGenres = async () => {
    let json = await Api.getGenres();
    console.log(json);
    setGameGenres(json);
  };

  useEffect(() => {
    loadGenres();
  }, []);

  useEffect(() => {
    loadGames();
  }, [genre]);

  return (
    <div>
      <Featured loading={loading} data={featured} />
      <HomeArea>
        <h1>Popular games in 2020/2021</h1>
        <CarouselIntro />
        <div className="search">
          <div className="leftSide">Categories</div>
          <div className="rightSide">
            <select
              required
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              {gameGenres.results &&
                gameGenres.results.map((item, k) => (
                  <option key={k} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <Carousel data={games} />
      </HomeArea>
      <Future />
      <Newslatters />
    </div>
  );
}

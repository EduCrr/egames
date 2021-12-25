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
  const loadFeatured = async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFeatured();
  }, []);

  const loadGames = async () => {
    try {
      let json = await Api.getHomeList();
      setGames(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);
  return (
    <div>
      <Featured data={featured} />
      <HomeArea>
        <h1>Popular games in 2020/2021</h1>
        <CarouselIntro />
        <div className="search">
          <div className="leftSide">Action</div>
          <div className="rightSide">Action</div>
        </div>
        <Carousel data={games} />
      </HomeArea>
      <Future />
      <Newslatters />
    </div>
  );
}

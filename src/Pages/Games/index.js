import React, { useEffect, useState } from "react";
import { GamesArea } from "./styled";
import Api from "../../Api";
import CarouselListGames from "../../components/CarouselListGames";
import SportsEsports from "@material-ui/icons/SportsEsports";
import Bounce from "react-reveal/Bounce";
import SingleGames from "../../components/SingleGames";
export default function Games() {
  const [gamesList, setGameList] = useState([]);
  const [gameGenres, setGameGenres] = useState([]);
  const [searching, setSearching] = useState("");
  const [genre, setGenre] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [yearInput, setYearInput] = useState("");
  const [singleGames, setSingleGames] = useState(false);

  const getGameList = async () => {
    let json = await Api.getGamesList(1);
    setGameList(json);
  };

  function handleModal() {
    setOpenModal(!openModal);
  }
  function handleYear(e) {
    setYearInput(e.substring(0, 4));
  }
  const loadGenres = async () => {
    let json = await Api.getGenres();
    setGameGenres(json);
  };

  async function handleGenresYear(e) {
    e.preventDefault();
    if (genre !== "") {
      setGameList([]);
      let json = await Api.getGenreAndYear(genre, yearInput);
      setSingleGames(true);
      setGameList(json);
    } else {
      return null;
    }
  }

  const loadSearchinFor = async () => {
    setGameList([]);
    let json = await Api.getSearchingFor(searching);
    setSingleGames(true);
    setGameList(json);
    console.log(json);
  };

  useEffect(() => {
    getGameList();
    loadGenres();
  }, []);

  useEffect(() => {
    if (searching !== "") {
      loadSearchinFor();
    }
  }, [searching]);

  return (
    <GamesArea open={openModal}>
      <span onClick={handleModal}>
        <SportsEsports />
      </span>
      <div className="search">
        <form>
          <input placeholder="Search" type="text" />
          <select
            value={searching}
            onChange={(e) => setSearching(e.target.value)}
          >
            <option value="">Searching For</option>
            <option value="2022">Upcoming games</option>
            <option value="2021">popular games in 2021</option>
            <option value="2020">popular games in 2020</option>
          </select>
        </form>
      </div>
      <div className="GamesList">
        {singleGames ? (
          <SingleGames data={gamesList} />
        ) : (
          gamesList.map((item, k) => <CarouselListGames data={item} key={k} />)
        )}
      </div>
      <Bounce left when={openModal}>
        <div className="modal">
          <form onSubmit={handleGenresYear}>
            <div className="genres">
              <h1>Genres</h1>
              <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option>Select Genres</option>
                {gameGenres.results &&
                  gameGenres.results.map((item, k) => (
                    <option key={k} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="year">
              <h1>Year </h1>
              {yearInput !== "" && <h5>{yearInput}</h5>}
              <input
                value={yearInput}
                type="range"
                min={2000}
                max={2022}
                step="any"
                className="slider"
                onChange={(e) => handleYear(e.target.value)}
              />
            </div>
            <br />
            <button type="submit">Search</button>
          </form>
        </div>
      </Bounce>
    </GamesArea>
  );
}
/*

*/

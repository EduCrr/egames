import React, { useEffect, useState } from "react";
import { GamesArea } from "./styled";
import Api from "../../Api";
import CarouselListGames from "../../components/CarouselListGames";
import SportsEsports from "@material-ui/icons/SportsEsports";
import Bounce from "react-reveal/Bounce";
import SingleGames from "../../components/SingleGames";
import { Height } from "@material-ui/icons";
let timer;
let totalResults;
export default function Games() {
  const [gamesList, setGameList] = useState([]);
  const [gameGenres, setGameGenres] = useState([]);
  const [searching, setSearching] = useState("");
  const [genre, setGenre] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [yearInput, setYearInput] = useState("");
  const [singleGames, setSingleGames] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchSingleGames, setSearchSingleGames] = useState("");
  const [result, setResult] = useState("");

  const getGameList = async () => {
    setLoading(true);
    let json = await Api.getGamesList(1);
    setGameList(json);
    setLoading(false);
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
    setLoading(true);
    e.preventDefault();
    if (genre !== "") {
      let json = await Api.getGenreAndYear(genre, yearInput);
      setSingleGames(true);
      setGameList(json);
      setLoading(false);
    } else {
      setLoading(false);
      return null;
    }
  }

  const loadSearchingFor = async () => {
    setLoading(true);
    let json = await Api.getSearchingFor(searching);
    setSingleGames(true);
    setGameList(json);
    setLoading(false);
  };

  useEffect(() => {
    if (searching !== "") {
      loadSearchingFor();
    }
  }, [searching]);

  //search single game
  const handleSearchKeyword = (e) => {
    setSearchSingleGames(e.target.value);
  };

  async function loadSearchingSingleGame(e) {
    e.preventDefault();
    if (searchSingleGames.trim() !== "") {
      setResult("");
      setLoading(true);
      let json = await Api.getSearchSingleGame(searchSingleGames);
      totalResults = json.count;
      setSingleGames(true);
      setGameList(json);
      setLoading(false);
      if (totalResults === 0 || !json) {
        setResult("Nenhum game encontrado!");
      }
    } else if (!searchSingleGames) {
      getGameList();
    }
  }

  function handleReset() {
    setSearchSingleGames("");
    setSearching("");
    setGenre("");
    setYearInput("");
    getGameList();
  }

  useEffect(() => {
    getGameList();
    loadGenres();
  }, []);

  return (
    <GamesArea open={openModal}>
      <span onClick={handleModal}>
        <SportsEsports />
      </span>
      <div className="search">
        <form onSubmit={loadSearchingSingleGame}>
          <input
            value={searchSingleGames}
            onChange={(e) => handleSearchKeyword(e)}
            placeholder="Search"
            type="text"
          />
          <button type="submit">Search</button>
        </form>
        <select
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
        >
          <option value="">Searching For</option>
          <option value="2022">Upcoming games</option>
          <option value="2021">popular games in 2021</option>
          <option value="2020">popular games in 2020</option>
        </select>

        <div className="reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="GamesList">
        {result !== "" && (
          <div style={{ height: "200px" }}>
            <h1 style={{ textAlign: "center" }}>{result}</h1>
          </div>
        )}
        {loading ? (
          <div style={{ height: "250px" }}>
            <h1>Carregando</h1>
          </div>
        ) : (
          <>
            {singleGames ? (
              <SingleGames data={gamesList} />
            ) : (
              gamesList.map((item, k) => (
                <CarouselListGames data={item} key={k} />
              ))
            )}
          </>
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

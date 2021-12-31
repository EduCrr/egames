import React, { useEffect, useState } from "react";
import { GamesArea } from "./styled";
import Api from "../../Api";
import CarouselListGames from "../../components/CarouselListGames";
import SportsEsports from "@material-ui/icons/SportsEsports";
import Bounce from "react-reveal/Bounce";
import SingleGames from "../../components/SingleGames";
let totalResults;
let next;
let type;

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
  const [page, setPage] = useState(1);
  const [result, setResult] = useState("");

  const getGameList = async () => {
    setLoading(true);
    let json = await Api.getGamesList(1);
    setGameList(json);
    setLoading(false);
    setSingleGames(false);
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

  function helpReq(j) {
    setResult("");
    next = j.next;
    setSingleGames(true);
    setGameList(j);
  }

  async function handleGenresYear() {
    if (genre !== "") {
      setLoading(true);
      setPage(1);
      setOpenModal(false);
      let json = await Api.getSearch("genreYear", yearInput, page, genre);
      helpReq(json);
      type = "genreYear";
      totalResults = json.count;
      setLoading(false);
    } else {
      setLoading(false);
      return null;
    }
  }

  const loadSearchingFor = async () => {
    setLoading(true);
    setPage(1);
    let json = await Api.getSearch("searchingFor", searching, page);
    helpReq(json);
    console.log(json);
    type = "searchingFor";
    totalResults = json.count;
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

  async function loadSearchingSingleGame() {
    if (searchSingleGames.trim() !== "") {
      setLoading(true);
      setPage(1);
      let json = await Api.getSearch(
        "searchSingle",
        "",
        page,
        "",
        searchSingleGames
      );
      helpReq(json);
      type = "searchSingle";
      totalResults = json.count;
      setLoading(false);

      if (totalResults === 0 || !json) {
        setResult("Nenhum game encontrado!");
      }
    } else if (!searchSingleGames) {
      getGameList();
    }
  }
  //page
  const handlePage = () => {
    setPage(page + 1);
  };

  async function handleMorePages() {
    if (type === "searchingFor") {
      setLoading(true);
      const json = await Api.getSearch("searchingFor", searching, page);
      helpReq(json);
      setLoading(false);
    } else if (type === "searchSingle") {
      setLoading(true);
      const json = await Api.getSearch(
        "searchSingle",
        "",
        page,
        "",
        searchSingleGames
      );
      helpReq(json);
      setLoading(false);
    } else if (type === "genreYear") {
      setLoading(true);
      const json = await Api.getSearch("genreYear", yearInput, page, genre);
      helpReq(json);
      setLoading(false);
    }
  }

  useEffect(() => {
    handleMorePages();
  }, [page]);

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
        <div>
          <input
            value={searchSingleGames}
            onChange={(e) => handleSearchKeyword(e)}
            placeholder="Search"
            type="text"
          />
          <button onClick={loadSearchingSingleGame}>Search</button>
        </div>
        <select
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
        >
          <option value="">Searching For</option>
          <option value="2022">Upcoming games</option>
          <option value="2021">popular games in 2021</option>
          <option value="2020">popular games in 2020</option>
        </select>
      </div>
      <div className="GamesList">
        {result !== "" && (
          <div style={{ height: "200px" }}>
            <h1 style={{ textAlign: "center" }}>{result}</h1>
          </div>
        )}
        {loading ? (
          <div className="loading">
            <img src="/assets/loading.gif" />
          </div>
        ) : (
          <>
            {singleGames ? (
              <>
                <SingleGames data={gamesList} />
                {next === null ? (
                  ""
                ) : (
                  <button type="submit" onClick={handlePage}>
                    More
                  </button>
                )}
              </>
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
          <div className="genres">
            <h1>Genres</h1>
            <select
              required
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
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
          <button onClick={handleGenresYear}>Search</button>
        </div>
      </Bounce>
    </GamesArea>
  );
}
/*

*/

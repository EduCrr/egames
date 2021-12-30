import axios from "axios";
const API_KEY = "598bb83df21b4392b44472accd500725";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const basicFetch = async (endpoint) => {
  let { data: json } = await api.get(`${endpoint}`);
  return json;
};

export default {
  getFeatured: async (id) => {
    let { data: json } = await api.get(`/games/${id}?key=${API_KEY}`);
    return json;
  },
  getGenres: async () => {
    let { data: json } = await api.get(`/genres?key=${API_KEY}`);
    return json;
  },
  getPopularYear: async () => {
    let { data: json } = await api.get(
      `/games?dates=2020-01-01,2021-12-31&ordering=-added&key=${API_KEY}&page_size=10`
    );
    return json;
  },
  getHomeList: async (id = 4) => {
    let { data: json } = await api.get(
      `/games?genres=${id}&key=${API_KEY}&page_size=26`
    );
    return json;
  },
  getFuture: async () => {
    let { data: json } = await api.get(
      `/games?dates=2021-12-31,2022-12-31&ordering=-added&key=${API_KEY}&page_size=25`
    );
    return json;
  },
  getSingleGame: async (id) => {
    let { data: json } = await api.get(`/games/${id}?key=${API_KEY}`);
    return json;
  },
  getScreenshots: async (slug) => {
    let { data: json } = await api.get(
      `/games/${slug}/screenshots?key=${API_KEY}`
    );
    return json;
  },
  getAchievements: async (id) => {
    let { data: json } = await api.get(
      `/games/${id}/achievements?key=${API_KEY}`
    );
    return json;
  },
  getSameSeries: async (id) => {
    let { data: json } = await api.get(
      `/games/${id}/game-series?key=${API_KEY}`
    );
    return json;
  },
  getGamesList: async (page = 1) => {
    return [
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/games?genres=4&key=${API_KEY}&page_size=20&page=${page}`
        ),
      },
      {
        slug: "rpg",
        title: "RPG",
        items: await basicFetch(
          `/games?genres=5&key=${API_KEY}&page_size=20&page=${page}`
        ),
      },
      {
        slug: "racing",
        title: "Racing",
        items: await basicFetch(
          `/games?genres=1&key=${API_KEY}&page_size=20&page=${page}`
        ),
      },
      {
        slug: "multiplayer",
        title: "Multiplayer",
        items: await basicFetch(
          `/games?genres=59&key=${API_KEY}&page_size=20&page=${page}`
        ),
      },
      {
        slug: "fighting",
        title: "Fighting",
        items: await basicFetch(
          `/games?genres=6&key=${API_KEY}&page_size=20&page=${page}`
        ),
      },
    ];
  },
  getGenreAndYear: async (genre, year = "") => {
    if (year !== "") {
      let { data: json } = await api.get(
        `/games?genres=${genre}&key=${API_KEY}&dates=${year}-01-01,${year}-12-31&ordering=-added&page_size=30`
      );
      return json;
    } else if (year === "") {
      let { data: json } = await api.get(
        `/games?genres=${genre}&key=${API_KEY}&page_size=40`
      );
      return json;
    }
  },
  getSearchingFor: async (year = "") => {
    let { data: json } = await api.get(
      `/games?dates=${year}-01-01,${year}-12-31&ordering=-added&key=${API_KEY}&page_size=30`
    );
    return json;
  },
};

//API 598bb83df21b4392b44472accd500725
//GET https://api.rawg.io/api/platforms?key=598bb83df21b4392b44472accd500725
//GET https://api.rawg.io/api/games?key=598bb83df21b4392b44472accd500725&dates=2019-09-01,2019-09-30&platforms=18,1,7
// screenshots slug game https://api.rawg.io/api/games/the-last-of-us-part-2/screenshots?key=598bb83df21b4392b44472accd500725&
//generos https://api.rawg.io/api/genres?key=598bb83df21b4392b44472accd500725
//https://api.rawg.io/api/games?genres=4&key=598bb83df21b4392b44472accd500725&page=2
//the last https://api.rawg.io/api/games/51325?key=598bb83df21b4392b44472accd500725&
//cyber https://api.rawg.io/api/games/41494?key=598bb83df21b4392b44472accd500725&
//red dead https://api.rawg.io/api/games/28?key=598bb83df21b4392b44472accd500725&
//control https://api.rawg.io/api/games/58812?key=598bb83df21b4392b44472accd500725&
//https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg

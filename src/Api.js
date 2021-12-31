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
          `/games?genres=4&key=${API_KEY}&page_size=4&page=${page}`
        ),
      },
    ];
  },
  getSearch: async (type, year, page, genre, slug) => {
    if (type === "searchingFor") {
      let { data: json } = await api.get(
        `/games?dates=${year}-01-01,${year}-12-31&ordering=-added&key=${API_KEY}&page_size=30&page=${page}`
      );
      return json;
    } else if (type === "searchSingle") {
      let { data: jsonSingle } = await api.get(
        `/games?search=${slug}&key=${API_KEY}&page_size=1&page=${page}`
      );
      return jsonSingle;
    } else if (type === "genreYear") {
      if (year !== "") {
        let { data: json } = await api.get(
          `/games?genres=${genre}&key=${API_KEY}&dates=${year}-01-01,${year}-12-31&ordering=-added&page_size=30&page=${page}`
        );
        return json;
      } else if (year === "") {
        let { data: jsonGenreYear } = await api.get(
          `/games?genres=${genre}&key=${API_KEY}&page_size=30&page=${page}`
        );
        return jsonGenreYear;
      }
    }
  },
};

/*
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





    

*/

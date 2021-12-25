import axios from "axios";
const API_KEY = "598bb83df21b4392b44472accd500725";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
});
export default {
  getFeatured: async (id) => {
    let { data: json } = await api.get(`/games/${id}?key=${API_KEY}`);
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

/*
id": 4,
      "name": "Action",
       "id": 2,
      "name": "Shooter",
      "id": 3,
      "name": "Adventure",
      id": 31,
      "name": "Singleplayer",
      "id": 13,
      "name": "Atmospheric",
      "id": 1,
      "name": "Survival",

      id": 15,
      "name": "Stealth",
      id": 34,
      "name": "Violent",
      "id": 69,
      "name": "Action-Adventure",
      "id": 37796,
      "name": "exclusive",
      
      "id": 7,
      "name": "Multiplayer",
      "id": 18,
      "name": "Co-op",
      id": 36,
      "name": "Open World",

        "id": 8,
      "name": "First-Person",
        
       "id": 149,
      "name": "Third Person",
      "id": 30,
      "name": "FPS",
      "id": 6,
      "name": "Exploration",
      "id": 34,
      "name": "Violent",
      id": 144,
      "name": "Crime",
      "id": 578,
      "name": "Masterpiece",
      */

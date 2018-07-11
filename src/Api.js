import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  loadGenres: () => api.get("genres"),
  saveSerie: saveSerie => api.post("series", saveSerie),
  SeriesByGenre: genre => api.get("series?genre=" + genre)
};

export default apis;

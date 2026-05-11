import axios from "axios";

const API = axios.create({
  baseURL: "https://amit-portfolio-ji1g.onrender.com/api",
  //  timeout: 15000,
});

export default API;
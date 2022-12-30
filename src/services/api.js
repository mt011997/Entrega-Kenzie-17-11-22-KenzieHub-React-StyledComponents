import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@Hub:token")}`,
  },
  timeout: 5000,
});
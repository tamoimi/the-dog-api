import axios from "axios";

const baseUrl = "https://swapi.dev/api";

export const getPerson = () => {
  return axios.get(`${baseUrl}/people`).then((res) => res.data);
};

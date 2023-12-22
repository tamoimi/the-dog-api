import axios from "axios";

const baseUrl = "http://swapi.dev/api";

export const getPerson = () => {
  return axios.get(`${baseUrl}/people`).then((res) => res.data);
};

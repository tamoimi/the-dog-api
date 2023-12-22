import axios from "axios";

const baseUrl = "//swapi.dev/api";

export const getPerson = () => {
  return axios.get(`${baseUrl}/people`).then((res) => res.data);
};

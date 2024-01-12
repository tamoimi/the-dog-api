import axios from "axios";

const baseUrl = "https://api.thedogapi.com/v1";

const baseUrlV2 = "https://dogapi.dog/api/v2";

// export const getDogs = () => {
//   return axios.get(`${baseUrl}/images/BkIEhN3pG`).then((res) => res.data);
// };

// dog-api
export const getDogData = () => {
  return axios.get(`${baseUrlV2}/breeds`).then((res) => res.data);
};

export const getFunFact = () => {
  return axios.get(`${baseUrlV2}/facts`).then((res) => res.data);
};

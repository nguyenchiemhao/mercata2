import Axios from "axios";
import { API } from "../api";

// request with authoriztion Bearer token
const customAxios = Axios.create({
  baseURL: API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "application/json",
  },
});
customAxios.defaults.baseURL = API;
customAxios.defaults.validateStatus = function (status) {
  return status === 422 || status === 409 || (status >= 200 && status < 300);
};

customAxios.interceptors.request.use(
  async (config) => {
    //config token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;

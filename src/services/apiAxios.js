import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://localhost:3001",
});

apiAxios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

apiAxios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export default apiAxios;

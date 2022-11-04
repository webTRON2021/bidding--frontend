import axios from "axios";

//get token from local storage
const getToken = () => {
  return JSON.parse(localStorage.getItem("user") || "{}")?.token;
};

export default axios
  .create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
  })
  .interceptors.request.use((config: any) => {
    const auth = getToken() ? `${getToken()}` : "";
    config.headers.common["Authorization"] = auth;
    config.headers.common["Authorization"] = `Bearer ${getToken()}`;
    return config;
  });

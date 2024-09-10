import axios from "axios";

const chataxiosInstance = axios.create({
  baseURL: "http://chat.armagyetdon.site/api",
  headers: {
    "Content-Type": "application/json",
  },
});

chataxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default chataxiosInstance;
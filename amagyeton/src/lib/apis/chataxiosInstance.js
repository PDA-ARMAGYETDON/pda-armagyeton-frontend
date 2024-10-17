import axios from "axios";

const AG_CHAT_URL = import.meta.env.VITE_CHAT_URL;

const chataxiosInstance = axios.create({
  baseURL: `${AG_CHAT_URL}/api`,
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

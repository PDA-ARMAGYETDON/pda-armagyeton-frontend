import axios from "axios";

const AG_GATEWAY_URL = import.meta.env.VITE_AG_GATEWAY_URL;
const AG_STOCK_URL = import.meta.env.VITE_STOCK_SYSTEM_URL;

const axiosInstance = axios.create({
  baseURL: `/${AG_GATEWAY_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
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

const axiosInstanceStock = axios.create({
  baseURL: `/${AG_STOCK_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstanceStock.interceptors.request.use(
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

export { axiosInstanceStock, axiosInstance };

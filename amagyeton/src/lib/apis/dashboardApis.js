import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getKospiKosdac = async () => {
  try {
    const response = await axiosInstance.get(`/ref/market-index`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getNews = async () => {
  try {
    const response = await axiosInstance.get(`/ref/news`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getIssue = async () => {
  try {
    const response = await axiosInstance.get(`/ref/issue`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
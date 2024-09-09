import axios from "axios";
import axiosInstance from "./axiosInstance";

//const API_BASE_URL = ""; // 서버의 기본 URL로 변경하세요.

export const GetUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `http://localhost:8081/api/users/signup`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const LoginUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/login",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};

export const LogoutUser = async () => {
  try {
    const response = await axiosInstance.post("/users/logout");
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const UpdateUserInfo = async (userData) => {
  try {
    const response = await axiosInstance.put("/users", userData);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createGroup = async (data) => {
  console.log(data);
  try {
    const response = await axiosInstance.post("/teams", data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const participationGroup = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/${id}/participate`);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const UserTeams = async () => {
  try {
    const response = await axiosInstance.get(`/teams/users`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const PendingTeam = async () => {
  try {
    const response = await axiosInstance.get(`/teams/pending`);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

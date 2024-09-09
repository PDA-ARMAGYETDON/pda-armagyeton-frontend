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
  console.log(userData);
  try {
    const response = await axios.post(
      `http://localhost:8080/api/users/signup`,
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

export const UpdateUserPInfo = async (userData) => {
  try {
    const response = await axiosInstance.put("/users/p", userData);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const WithdrawUser = async () => {
  try {
    const response = await axiosInstance.delete("/users");
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
    return response.data;
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

export const InviteCode = async (code) => {
  try {
    const response = await axiosInstance.get(`/teams`, {
      params: {
        inviteCode: code,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const PendingTeam = async (id) => {
  try {
    const response = await axiosInstance.get(`/teams/${id}/pending`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const CreateTeam = async () => {
  try {
    const response = await axiosInstance.put(`/teams`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const RoleSuggest = async (id) => {
  try {
    const response = await axiosInstance.get(`/groups/${id}/rules/offers`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const GroupRole = async () => {
  try {
    const response = await axiosInstance.get(`/teams/rules`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const RoleVoteSuggest = async (id, data) => {
  console.log(id, data);
  try {
    const response = await axiosInstance.post(`/groups/${id}/rules`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const CheckId = async (id) => {
  console.log(id);
  try {
    const response = await axiosInstance.post(`/users/valid/id`, {
      loginId: id,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const CheckEmail = async (email) => {
  try {
    const response = await axiosInstance.post(`/users/valid/email`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const ChangeAuth = async (team) => {
  try {
    const response = await axiosInstance.put(`/auth/${team}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const CreateAccount = async (data) => {
  console.log(data);
  try {
    const response = await axiosInstance.post(`/accounts/team`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const CreatePersonalAccount = async (data) => {
  try {
    const response = await axiosInstance.post(`/accounts/personal`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const SendFcmToken = async ({ userId, fcmToken }) => {
  try {
    const response = await axiosInstance.post("/users/fcm/issue", {
      userId,
      fcmToken,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

import axios from "axios";

//const API_BASE_URL = ""; // 서버의 기본 URL로 변경하세요.

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
      "http://localhost:8081/api/users/login",
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

import axios from "axios";
import axiosInstance from "./axiosInstance";
import chataxiosInstance from "./chataxiosInstance";

const AG_GATEWAY_URL = import.meta.env.VITE_AG_GATEWAY_URL;

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
      `${AG_GATEWAY_URL}/api/users/signup`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const LoginUser = async (userData) => {
  try {
    console.log(import.meta.env.VITE_AG_GATEWAY_URL);

    const response = await axios.post(
      `${AG_GATEWAY_URL}/api/users/login`,
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

export const RoleData = async () => {
  try {
    const response = await axiosInstance.get(`/teams/rules`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const GroupRole = async () => {
  try {
    const response = await axiosInstance.get(`/rule-offer`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const RoleVoteSuggest = async (data) => {
  console.log(data);
  try {
    const response = await axiosInstance.post(`/rule-offer`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const CheckId = async (id) => {
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

export const fetchRankingData = async (seedMoney) => {
  try {
    const response = await axiosInstance.get(`/ranking?seedMoney=${seedMoney}`);
    return response;
  } catch (error) {
    console.error("Error fetching ranking data:", error);
    throw error;
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

export const RoleVote = async (id, data) => {
  try {
    const response = await axiosInstance.post(`/rules/${id}/vote`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const ChartData = async () => {
  try {
    const response = await axiosInstance.get(`/stocks/prices`, {
      params: {
        code: "005930",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const GetPersonalAccount = async () => {
  try {
    const response = await axiosInstance.get(`/accounts/personal`);
    return response.data;
  } catch (error) {
    console.error(error);

//채팅 내역 

export const ChatHistory = async (id) => {
  try {
    //console.log("채팅 내역 함수가 호출되었습니다."); // 호출 여부 확인용 로그

    // axiosInstance를 사용하여 요청
    const response = await chataxiosInstance.get(`/chat/rooms/${id}`); // baseURL이 자동으로 적용됨

    console.log("채팅 내역:", response.data); // 응답 데이터 구조 확인

    // 응답 데이터의 'data' 배열을 chatList에 저장
    return response.data;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return null;
  }
};

export const PersonalAccount = async () => {
  try {
    const response = await axiosInstance.get(`/stocks/prices`, {
      params: {
        code: "005930",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const GetPersonalTransferHistory = async (page, size) => {
  try {
    const response = await axiosInstance.get(
      `/transfer/history/private?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const PortfoiloStockData = async () => {
  try {
    const response = await axiosInstance.get(`/holdings/ratio`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const TradeData = async (page, num) => {
  try {
    const response = await axiosInstance.get(`/trades`, {
      params: {
        page: page,
        size: num,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const TransferData = async (page, num) => {
  try {
    const response = await axiosInstance.get(`/accounts/history/team`, {
      params: {
        page: page,
        size: num,
      },
    });
//유저 id 로 이름을 조회 

export const UserNameInChat = async (id) => {
  try {
    //console.log("채팅하는 사람 이름 get 호출되었습니다.");

    const response = await chataxiosInstance.get(`/chat/rooms/${id}/name`);

    console.log("이름:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


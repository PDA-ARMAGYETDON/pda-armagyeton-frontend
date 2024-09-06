import styled from "styled-components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import { ToastContainer } from "react-toastify";

export const MainDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitleDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;

  & p:nth-child(1) {
    font-size: 1.5rem;
    color: #3f8cff;
    font-weight: 700;
  }

  & p:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const InviteCodeItem = styled.div`
  width: 70%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const InviteCode = styled.div`
  color: #3f8cff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const InviteCodeDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CodeShareDiv = styled.div`
  margin-top: 30px;
  width: 70%;
  background-color: #0046ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  font-size: 0.9rem;

  &:hover {
    cursor: pointer;
  }
`;

export const CopyIcon = styled(ContentCopyIcon)`
  font-size: 1.3rem !important;
  margin-left: 10px;
  color: #3f8cff;

  &:hover {
    cursor: pointer;
  }
`;

export const CustomShareIcon = styled(ShareIcon)`
  font-size: 1rem !important;
  margin-right: 10px;
  color: white;
`;

export const HomeDiv = styled.div`
  margin-top: 10px;
  width: 70%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 10px;
    font-family: "Arial", sans-serif;
    font-size: 16px;
    padding: 16px;
  }

  .Toastify__toast--success {
    background-color: #edf6eb;
    color: #4aa02c;
  }

  .Toastify__toast--error {
    background-color: #f44336;
    color: #ffffff;
  }

  .Toastify__progress-bar {
    background-color: #ffffff;
  }
`;

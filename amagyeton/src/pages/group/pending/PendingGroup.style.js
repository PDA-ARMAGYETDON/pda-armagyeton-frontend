import styled from "styled-components";
import { FaUserLarge } from "react-icons/fa6";
import ShareIcon from "@mui/icons-material/Share";
import { ToastContainer } from "react-toastify";

export const PendingDiv = styled.div`
  padding: 20px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
`;
export const PendingIntro = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;

  & p {
    color: #3f8cff;
  }
  & span {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const ColorSpan = styled.span`
  color: #3f8cff;
  font-size: 1rem;
`;

export const LabelSpan = styled.span`
  color: #3f8cff;
  font-size: 1rem;
  font-weight: bold;
`;

export const AlarmSpan = styled.span`
  color: tomato;
  font-size: 0.7rem;
  margin-top: 10px;
  font-weight: "700";
`;

export const SmallSpan = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.7rem;
`;

export const Category = styled.span`
  background-color: #0046ff;
  border-radius: 30px;
  color: white;
  font-size: 0.8rem;
  padding: 5px 15px;
`;

export const GroupInfoSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const GroupInfoDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const GroupInfoItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const RoleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ParticipantDiv = styled.div`
  width: 100%;
  margin-bottom: 35px;
`;
export const Participant = styled(FaUserLarge)`
  font-size: 1.2rem;
  margin-right: 5px;
  color: ${(props) => (props.isActive ? "#2AED57" : "#929292")};
`;

export const ShareBtn = styled.button`
  width: 90%;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isCheck ? "#0046ff" : "rgba(0, 70, 255, 0.5)"};
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  width: 90%;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isCheck ? "#0046ff" : "rgba(0, 70, 255, 0.5)"};
  color: white;
  padding: 10px 20px;
`;

export const CustomShareIcon = styled(ShareIcon)`
  font-size: 1rem !important;
  margin-right: 10px;
  color: white;
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

import styled, { keyframes } from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import EastIcon from "@mui/icons-material/East";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SignupDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  background-image: url("/images/background_scroll.png");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupBody = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const SignupSpan = styled.span`
  color: #195efd;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SignupForm = styled.form`
  width: 75%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  padding: 30px;
  margin-bottom: 30px;
`;

export const SignupIdDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;

  & label {
    color: #7d8592;
    font-size: 13px;
    margin-bottom: 5px;
  }

  & input {
    width: 100%;
    line-height: 1.5rem;
    padding: 10px 20px;
    border: 1px solid #d8e0f0;
    border: ${(props) =>
      props.hasError
        ? "1px solid rgba(255 , 0 , 0 , 0.5)"
        : "1px solid rgba(0,0,0,0.1)"};
    box-shadow: ${(props) =>
      props.hasError ? "0 0 5px rgba(255 , 0 , 0 , 0.5)" : "null"};
    border-radius: 10px;
  }

  & input:focus {
    outline: none;
    border-color: #306de7;
    box-shadow: 0 0 5px rgba(48, 109, 231, 0.5);
  }

  & input::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.75rem;
  }
`;

export const DuplicateIdCheck = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;

  & label {
    color: #7d8592;
    font-size: 13px;
    margin-bottom: 5px;
  }

  & input {
    width: 70%;
    line-height: 1.5rem;
    padding: 10px 20px;
    border: 1px solid #d8e0f0;
    border: ${(props) =>
      props.hasError
        ? "1px solid rgba(255 , 0 , 0 , 0.5)"
        : "1px solid rgba(0,0,0,0.1)"};
    box-shadow: ${(props) =>
      props.hasError ? "0 0 5px rgba(255 , 0 , 0 , 0.5)" : "null"};
    border-radius: 10px;
  }

  & input:focus {
    outline: none;
    border-color: #306de7;
    box-shadow: 0 0 5px rgba(48, 109, 231, 0.5);
  }

  & input::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.75rem;
  }
`;

export const IdDuplicateCheckDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.step >= 2 ? "space-between" : "flex-end"};
  align-items: center;
`;

export const SubmitDiv = styled.div`
  width: 109px;
  height: 39px;
  border: none;
  background-color: ${(props) =>
    props.isValid ? "#195efd" : "rgba(25, 94, 253, 0.6)"};
  border-radius: 14px;
  color: white;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export const prevStepDiv = styled.span`
  width: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export const prevStep = styled.span`
  color: #3f8cff;
  font-size: 0.9rem;
`;
export const prevStepIcon = styled(ArrowBackIcon)`
  color: #3f8cff;
  font-size: 0.9rem !important;
  margin-right: 5px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  background-color: #fdf5f4;
  border-radius: 10px;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & span {
    margin-left: 10px;
  }
`;

export const ErrorIcon = styled(InfoIcon)`
  font-size: 0.9rem !important;
`;

export const SignupBodyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  & span {
    font-size: 20px;
    font-weight: 600;
    margin-left: 5px;
  }
`;

export const StageCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-weight: 500;

  & div:nth-child(1) {
    color: #3f8cff;
    font-size: 15px;
    margin-bottom: 8px;
  }

  & div:nth-child(2) {
    font-weight: bold;
  }
`;

export const NextIcon = styled(EastIcon)`
  font-size: 0.9rem !important;
  margin-left: 10px;
`;

export const CheckIdMessage = styled.span`
  font-size: 0.7rem;
  margin-left: 10px;
  margin-top: 3px;
  color: ${(props) => (props.checkIdResult ? "#195EFD" : "#FD191D")};
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #eeeeee;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  height: 5px;
  border-radius: 10px;
  background-color: #5c6e97;
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease-in-out;
`;

export const EmailButton = styled.button`
  width: 25%;
  color: white;
  background-color: #195efd;
  border: none;
  padding: 12px 5px;
  border-radius: 10px;
  font-size: 0.7rem;
`;

export const AddressButton = styled.button`
  width: 25%;
  color: white;
  background-color: #4b5161;
  border: none;
  padding: 12px 5px;
  border-radius: 10px;
  font-size: 0.7rem;
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcode)``;
export const AgreeDetail = styled(KeyboardArrowDownIcon)`
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
  }
`;

export const AllCheckIcon = styled(TaskAltIcon)`
  margin-right: 10px;
  font-size: 1.1rem !important;
`;
export const CheckIcon = styled(TaskAltIcon)`
  margin-right: 10px;
  font-size: 1.1rem !important;
`;

export const AllAgreeDiv = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.allAgree ? "#195EFD" : "#7d8592")};
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  &:hover {
    color: #195efd;
    cursor: pointer;
  }
`;

export const AgreeDiv = styled.div`
  width: 100%;
  padding: 20px 0px;
  color: #7d8592;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem !important;
`;

export const AgreeMessageDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isCheck ? "#195EFD" : "#7d8592")};
  font-size: 0.8rem;

  &:hover {
    color: #195efd;
    cursor: pointer;
  }
`;

export const AgreeDetailMessage = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 0.7rem;
  background-color: #f3f5f8;
  color: #7d8592;
`;

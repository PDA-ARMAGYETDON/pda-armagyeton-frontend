import styled, { keyframes } from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import EastIcon from "@mui/icons-material/East";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Select from "react-select";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const GroupWriteDiv = styled.section`
  width: 100%;
  padding: 40px;
  padding-top: 10px;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const GroupWriteIntro = styled.div`
  width: 100%;
  margin-bottom: 20px;
  & p {
    color: #3f8cff;
  }
  & span {
    font-weight: 600;
  }
`;

export const ColorSpan = styled.span`
  color: #3f8cff;
  font-size: 1.3rem;
`;

export const GroupWriteForm = styled.form`
  background-color: white;
  border-radius: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const GroupWriteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;

  & label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #3f8cff;

    & span {
      color: rgba(0, 0, 0, 0.7);
      font-size: 0.7rem;
    }
  }

  & li::marker {
    color: #3f8cff;
  }
`;

export const GroupWriteName = styled.input`
  width: 90%;
  border: none;
  border-bottom: ${(props) =>
    props.hasError
      ? "2px solid rgba(255, 0, 0, 0.6)"
      : "2px solid rgba(73, 107, 186, 0.7)"};
  line-height: 1.5rem;
  padding: 0.5rem 0;
  transition: border-bottom-color 0.3s ease;
  font-size: 1.1rem;
  margin-right: 5px;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(73, 107, 186, 1);
  }
`;

export const GroupWriteShort = styled.input`
  width: 30%;
  border: none;
  border-bottom: ${(props) =>
    props.hasError
      ? "2px solid rgba(255, 0, 0, 0.6)"
      : "2px solid rgba(73, 107, 186, 0.7)"};
  line-height: 1.5rem;
  padding: 0.5rem 0;
  transition: border-bottom-color 0.3s ease;
  font-size: 1.1rem;
  margin-right: 5px;
  margin-left: 20px;
  text-align: center;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(73, 107, 186, 1);
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 5px;

  & span {
    margin-left: 5px;
  }
`;
export const ErrorIcon = styled(InfoIcon)`
  font-size: 0.9rem !important;
`;

export const MeetingSize = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;

  & button {
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }

  & span {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const CategorySpan = styled.span`
  padding: 6px 22px;
  font-size: 0.9rem;
  border-radius: 20px;
  background-color: ${(props) =>
    props.isCheck ? "#3f8cff" : "rgba(0, 0, 0, 0.2)"};
  color: white;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #3f8cff;
    cursor: pointer;
  }
`;

export const GroupWriteCategory = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 7px;

  & label {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
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
export const NextIcon = styled(EastIcon)`
  font-size: 0.9rem !important;
  margin-left: 10px;
`;

export const SubmitBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.step >= 2 ? "space-between" : "flex-end"};
  align-items: center;
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

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const StyledCalendar = styled(Calendar)``;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  height: 5px;
  border-radius: 10px;
  background-color: #3f8cff;
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease-in-out;
`;

export const GroupAmountDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const AmountSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const CalendarIcon = styled(CalendarTodayIcon)`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const CustomSelect = styled(Select)`
  width: 90%;
  border-radius: 10px;
`;

export const RoleLabelDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const RoleIcon = styled(ErrorOutlineIcon)`
  font-size: 0.9rem !important;
  color: rgba(0, 0, 0, 0.7);
  margin-left: 5px;
  margin-bottom: 3px;
  cursor: pointer;
`;

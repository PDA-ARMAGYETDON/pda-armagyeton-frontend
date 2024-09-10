import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoIcon from "@mui/icons-material/Info";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 20px;
  gap: 5px;
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  margin: 20px 0 30px 0;
`;

export const UserInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Label = styled.span`
  font-size: 17px;
  color: #23303b;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: "#ffe5e5";
  border: ${(props) =>
    props.hasError
      ? "1px solid rgba(255 , 0 , 0 , 0.5)"
      : "1px solid rgba(0,0,0,0.1)"};
  box-shadow: ${(props) =>
    props.hasError ? "0 0 5px rgba(255 , 0 , 0 , 0.5)" : "null"};
  border-radius: 10px;
  padding: 12px;
  font-size: 15px;
  color: #333;
  outline: none;

  &:focus {
    border-color: #306de7;
    box-shadow: 0 0 5px rgba(48, 109, 231, 0.5);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.85rem;
  }
`;

export const ErrorDiv = styled.div`
  width: 100%;
  margin-top: 5px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  border-radius: 10px;
  display: flex;
  align-items: center;

  & span {
    margin-left: 5px;
  }
`;

export const ErrorIcon = styled(InfoIcon)`
  font-size: 0.9rem !important;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.disabled ? "#a4a9ae" : "#456efe")};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#a4a9ae" : "#0056b3")};
  }
`;

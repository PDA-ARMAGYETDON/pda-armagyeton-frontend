import styled, { keyframes } from "styled-components";
import InfoIcon from "@mui/icons-material/Info";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LoginDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px auto;
  background-image: url("/images/background_scroll.png");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginBody = styled.body`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const LoginSpan = styled.span`
  color: #195efd;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  width: 75%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  padding: 30px;
  margin-bottom: 30px;
`;

export const LoginIdDiv = styled.div`
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
    font-size: 14px;
  }
`;

export const SubmitBtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  padding: 12px 40px;
  border: none;
  background-color: ${(props) =>
    props.isValid ? "#195efd" : "rgba(25, 94, 253, 0.6)"};
  border-radius: 14px;
  color: white;
  font-size: 14px;
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

// export const loginAnimation = styled.div`
//   width: 230px;
//   height: 230px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 10px;
// `;

export const LoginBodyLogo = styled.div`
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

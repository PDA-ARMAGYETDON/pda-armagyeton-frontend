import React from "react";
import styled from "styled-components";

const ToastContainer = styled.div`
  width: calc(100% - 40px);
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%);
  background-color: #000;
  transition: opacity 0.5s ease, transform 0.5s ease;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0.8;
  z-index: 1000;
  pointer-events: none;
`;

const SignupToast = ({ message }) => {
  return <ToastContainer>{message}</ToastContainer>;
};

export default SignupToast;

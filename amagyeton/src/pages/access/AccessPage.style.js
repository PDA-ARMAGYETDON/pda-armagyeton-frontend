import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AccessDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px auto;
  background-image: url("/images/background_scroll.png");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccessHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccessBody = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 70px;
  animation: ${fadeIn} 0.3s ease-in;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const AccessImg = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const AccessBodyButtonDiv = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    margin-top: 30px;
    width: 85%;
    background-color: #004dfd;
    padding: 12px 20px;
    border-radius: 20px;
    color: white;
    border: none;
    margin-bottom: 20px;
    font-size: 16px;
  }

  & span {
    color: #757575;
    margin-left: 5px;
  }
`;

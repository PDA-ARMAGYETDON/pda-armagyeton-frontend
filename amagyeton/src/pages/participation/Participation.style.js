// pages/Participation/Participation.style.js
import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const BodyDiv = styled.div`
  width: 100%;
  padding: 30px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 70%;
  }
`;
export const GroupWriteIntro = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;

  & p {
    color: #3f8cff;
  }
  & span {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const ColorSpan = styled.span`
  color: #3f8cff;
`;

export const CodeItemDiv = styled.div`
  width: 283px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1rem;
    margin-bottom: 15px;
  }

  & input {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.1)" : "#459bff"};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgba(0,0,0,0.1)" : "#459bff"};
  }
`;

export const CodeDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
    font-size: 1rem;
  }
`;

export const CodeCheckDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CodeCheckInput = styled.input`
  width: 11%;
  border: none;
  background-color: inherit;
  border-bottom: 3px solid rgba(0, 0, 0, 0.7);
  border-bottom-color: ${(props) =>
    props.hasValue ? "#3E8CFF" : "rgba(0,0,0,0.2)"};
  text-align: center;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`;

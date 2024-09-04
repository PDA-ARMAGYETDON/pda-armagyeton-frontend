import styled from "styled-components";

export const MessageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;
export const MessageInput = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Submit = styled.div`
  background-color: #456efe;
  border-radius: 10px;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

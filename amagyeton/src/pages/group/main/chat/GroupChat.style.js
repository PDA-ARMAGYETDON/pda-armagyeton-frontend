import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px); /* 헤더 높이 조정 */
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Message = styled.div`
  background-color: #456efe;
  color: white;
  border-radius: 10px;
  padding: 10px;
  max-width: 70%;
  align-self: flex-start;
  word-break: break-word;
  position: relative; /* 화살표를 추가하기 위한 relative 위치 지정 */
`;

export const MessageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MessageInput = styled.input`
  flex-grow: 1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
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
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

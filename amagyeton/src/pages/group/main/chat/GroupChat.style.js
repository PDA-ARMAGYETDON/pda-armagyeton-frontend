import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px); /* 헤더 높이 조정 */
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  
`;

export const ChatBubble = styled.div`
  background-color: ${(props) => (props.isMyMessage ? "white" : "#e6e6e6")};  /* 연한 하늘색과 연한 회색 */
  border-radius: 12px;
  padding: 10px;
  max-width: 35%; 
  align-self: ${(props) => (props.isMyMessage ? "flex-end" : "flex-start")};
  word-break: break-word;
  position: relative;
  margin-left: ${(props) => (props.isMyMessage ? "auto" : "0")};
  margin-right: ${(props) => (props.isMyMessage ? "0" : "auto")};
  text-align: ${(props) => (props.isMyMessage ? "right" : "left")};
  
  /* 여백 추가 */
  margin-bottom: 10px; /* 각 말풍선 사이에 10px 간격 */
`;

// export const ChatWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
// `;

// export const ChatMessage = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
//   align-items: ${props => (props.isMe ? 'flex-end' : 'flex-start')}; // 본인이 보낸 메시지는 오른쪽 정렬
// `;

// export const MessageBubble = styled.div`
//   max-width: 60%;
//   padding: 10px 15px;
//   border-radius: 20px;
//   background-color: ${props => (props.isMe ? '#e1ffc7' : '#d6e4ff')}; // 본인이 보낸 메시지와 상대방 메시지 색 구분
//   color: ${props => (props.isMe ? '#000' : '#fff')}; // 텍스트 색 구분
//   font-size: 14px;
//   line-height: 1.4;
//   word-wrap: break-word;
//   text-align: left;
// `;

// export const MessageTime = styled.span`
//   font-size: 12px;
//   color: #888;
//   margin-top: 5px;
//   margin-left: 10px;
// `;

// export const SenderName = styled.div`
//   font-size: 12px;
//   font-weight: bold;
//   margin-bottom: 5px;
//   color: ${props => (props.isMe ? '#333' : '#555')}; // 본인이 보낸 경우 색상 조절 가능
// `;


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


export const ChatMessagePage = styled.div`
  height: 95vh;  /* 컨테이너 높이 (원하는 크기로 조정 가능) */
  overflow-y: auto;  /* 세로 스크롤 */
  display: flex;
  flex-direction: column;
  overflow-anchor: none; /* 스크롤 고정 방지 */

`;
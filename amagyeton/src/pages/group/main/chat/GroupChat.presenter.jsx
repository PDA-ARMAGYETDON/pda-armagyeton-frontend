import { useState, useRef, useEffect } from "react";
import HeaderNoLogoPage from "../../../../components/header-no-logo/header-no-logo";
import * as S from "./GroupChat.style";
import { useParams } from "react-router-dom";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client"; // SockJS 모듈

const GroupChatUIPage = () => {
  const [text, setText] = useState("");
  const [chatList, setChatList] = useState([]);
  const { team_id } = useParams(); // team_id : 10으로 가정
  const client = useRef({});

  const connect = () => {
    // 연결할 때
    client.current = new StompJs.Client({
      brokerURL: "wss://chat.armagyetdon.site/stomp/chat",
      onConnect: () => {
        subscribe(); // 연결 성공 시 구독하는 로직 실행
      },
    });
    client.current.activate(); // 클라이언트 활성화
  };

  const subscribe = () => {
    // team_id : 10으로 가정
    client.current.subscribe("/sub/chat/room/" + 10, (message) => {
      const jsonBody = JSON.parse(message.body);
      console.log(jsonBody);
      setChatList((prevChatList) => [...prevChatList, jsonBody]);
    });
  };

  const publish = (message) => {
    if (!client.current.connected) {
      console.log("웹소켓 끊어짐.");
      return;
    }

    client.current.publish({
      destination: "/pub/sendMessage",
      body: JSON.stringify({
        teamId: 10, // 가정
        userId: 20, // 가정
        message: message,
        name: "카리나", // 임시로 작성자
      }),
    });
    setText("");
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  const handleSubmit = (event) => {
    publish(text);
  };

  return (
    <>
      <HeaderNoLogoPage />
      <div className={"chat-list"}>
        {chatList.map((chat, index) => (
          <div key={index}>{chat.message}</div>
        ))}
      </div>
      <S.MessageDiv>
        <S.MessageInput
          Input
          type="text"
          placeholder="메세지를 입력하세요"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <S.Submit onClick={handleSubmit}>
          <img src="/images/messageIcon.png" />
        </S.Submit>
      </S.MessageDiv>
    </>
  );
};

export default GroupChatUIPage;

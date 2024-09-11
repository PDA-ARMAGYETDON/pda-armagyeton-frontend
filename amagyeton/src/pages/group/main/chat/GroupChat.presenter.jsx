import { useState, useRef, useEffect } from "react";
import HeaderNoLogoPage from "../../../../components/header-no-logo/header-no-logo";
import * as S from "./GroupChat.style";
import { useParams } from "react-router-dom";
import * as StompJs from "@stomp/stompjs";
import base64 from "base-64";
import { ChatHistory } from "../../../../lib/apis/apis.jsx";
import { UserNameInChat } from "../../../../lib/apis/apis.jsx";

const GroupChatUIPage = () => {
  const [text, setText] = useState("");
  const [chatList, setChatList] = useState([]); // 기존 채팅 목록 + 실시간 채팅 목록을 관리
  const [userId, setUserId] = useState(null); // userId 상태로 관리
  const [teamId, setTeamId] = useState(null); // teamId 상태로 관리
  const [name, setName] = useState("");
  const client = useRef({});
  const chatEndRef = useRef(null); // 스크롤을 조정할 참조

  // 자동 스크롤 함수
  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  useEffect(() => {
    console.log("useEffect가 실행되었습니다.");
    const token = localStorage.getItem("TOKEN");
    const payload = token.split(".")[1];
    const decodedPayload = base64.decode(payload);
    const decodedData = JSON.parse(decodedPayload);
    setUserId(decodedData.userId); // 상태로 저장
    setTeamId(decodedData.teamId); // 상태로 저장
  }, []);

  useEffect(() => {
    console.log(userId);
    console.log(teamId);
    const LoadChatHistory = async () => {
      try {
        const response = await ChatHistory(teamId);
        if (response) {
          console.log(response.data);
          setChatList(response.data);
        }
      } catch (error) {
        console.error("Error 채팅 내역:", error);
      }
    };

    LoadChatHistory();

    const GetUserNameInChat = async () => {
      try {
        const response = await UserNameInChat(userId);
        if (response) {
          setName(response.data);
        }
      } catch (error) {
        console.error("Error 이름:", error);
      }
    };

    GetUserNameInChat();

    connect();

    return () => disconnect();
  }, [userId, teamId]);

  // chatList가 업데이트될 때마다 스크롤을 맨 아래로 이동
  useEffect(() => {
    // const scrollWithDelay = () => {
    //   setTimeout(() => {
    //     scrollToBottom();
    //   }, 100); // 100ms 딜레이 추가
    // };

    // scrollWithDelay();
    scrollToBottom();
  }, [chatList]);

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "wss://chat.armagyetdon.site/stomp/chat",
      onConnect: () => {
        subscribe();
      },
    });
    client.current.activate();
  };

  const subscribe = () => {
    client.current.subscribe("/sub/chat/room/" + teamId, (message) => {
      const jsonBody = JSON.parse(message.body);
      console.log(jsonBody);
      setChatList((prevChatList) => {
        if (Array.isArray(prevChatList)) {
          return [...prevChatList, jsonBody];
        } else {
          return [jsonBody];
        }
      });
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
        teamId: teamId,
        userId: userId,
        message: message,
        name: name,
      }),
    });
    setText("");
  };

  const disconnect = () => {
    console.log("dldldld");
    client.current.deactivate();
  };

  const handleSubmit = (event) => {
    publish(text);
  };

  return (
    <>
      <HeaderNoLogoPage />
      <S.ChatMessagePage>
        <div className={"chat-list"}>
          {chatList && chatList.length > 0
            ? chatList.map((chat, index) => (
                <div key={index}>
                  {/* 내 메시지가 아니면 이름을 표시 */}
                  {!(chat.senderId === userId || chat.userId === userId) && (
                    <S.SenderName>{chat.name}</S.SenderName>
                  )}
                  <S.ChatBubble
                    isMyMessage={chat.senderId === userId || chat.userId === userId}
                  >
                    {chat.message}
                  </S.ChatBubble>
                </div>
              ))
            : null}
          <div ref={chatEndRef} /> {/* 스크롤 마지막 참조 */}
        </div>

        
        <S.MessageDiv>
          <S.MessageInput
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
      </S.ChatMessagePage>
    </>
  );
};

export default GroupChatUIPage;

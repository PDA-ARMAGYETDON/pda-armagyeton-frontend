import { useState } from "react";
import * as S from "./GroupChat.style";
import HeaderChatPage from "../../../../components/header-chat/header-chat";

const GroupChatUIPage = () => {
  const [text, setText] = useState("");

  return (
    <>
      <HeaderChatPage />
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
        <S.Submit>
          <img src="/images/messageIcon.png" />
        </S.Submit>
      </S.MessageDiv>
    </>
  );
};

export default GroupChatUIPage;

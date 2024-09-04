import { useState } from "react";
import HeaderNoLogoPage from "../../../../components/header-no-logo/header-no-logo";
import * as S from "./GroupChat.style";

const GroupChatUIPage = () => {
  const [text, setText] = useState("");

  return (
    <>
      <HeaderNoLogoPage />
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

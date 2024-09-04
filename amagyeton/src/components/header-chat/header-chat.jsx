import { useNavigate } from "react-router-dom";
import * as S from "./header-chat.style";

const HeaderChatPage = () => {
  const navigate = useNavigate();

  const onClickPageBack = () => {
    navigate(-1);
  };

  return (
    <S.MoblieDivHeader>
      <div onClick={onClickPageBack}>
        <S.BackIcon />
      </div>

      <S.MenuIcon />
    </S.MoblieDivHeader>
  );
};

export default HeaderChatPage;

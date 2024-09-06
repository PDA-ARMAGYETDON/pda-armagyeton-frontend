import { useNavigate } from "react-router-dom";
import * as S from "./header-back.style";

const HeaderBackPage = () => {
  const navigate = useNavigate();

  const onClickPageBack = () => {
    navigate(-1);
  };

  return (
    <S.MoblieDivHeader>
      <div onClick={onClickPageBack}>
        <S.BackIcon />
      </div>
      <div>
        <img src="/images/logo.png" alt="no image" />
        <span>아마곗돈</span>
      </div>
      <div></div>
    </S.MoblieDivHeader>
  );
};

export default HeaderBackPage;

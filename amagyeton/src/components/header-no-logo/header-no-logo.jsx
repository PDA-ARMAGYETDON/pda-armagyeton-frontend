import { useNavigate } from "react-router-dom";
import * as S from "./header-no-logo.style";

const HeaderNoLogoPage = () => {
  const navigate = useNavigate();

  const onClickPageBack = () => {
    navigate(-1);
  };

  return (
    <S.MoblieDivHeader>
      <div onClick={onClickPageBack}>
        <S.BackIcon />
      </div>
      <div></div>
    </S.MoblieDivHeader>
  );
};

export default HeaderNoLogoPage;

import { useNavigate } from "react-router-dom";
import * as S from "./header-no-back.style";

const HeaderNoBackPage = () => {
  return (
    <S.MoblieDivHeader>
      <div>
        <img src="/images/logo.png" alt="no image" />
        <span>아마곗돈</span>
      </div>
    </S.MoblieDivHeader>
  );
};

export default HeaderNoBackPage;

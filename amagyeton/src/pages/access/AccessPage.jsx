import { useNavigate } from "react-router-dom";
import * as S from "./AccessPage.style";
import HeaderBackPage from "../../components/header-back/header-back";

const AccessPage = () => {
  const navigate = useNavigate();

  const onClickMoveToLogin = () => {
    navigate("/login");
  };

  const onClickMovoToSignup = () => {
    navigate("/signup");
  };
  return (
    <S.AccessDiv>
      <HeaderBackPage />
      <S.AccessBody>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.AccessImg src="/images/login.png" />
        </div>
        <S.AccessBodyButtonDiv>
          <button onClick={onClickMoveToLogin}
            style={{
              backgroundColor: "#195EFD", color: "white",
              padding: '10px 20px'
            }}
          >로그인</button>
          <span>
            계정이 없는 경우
            <span
              style={{ color: "#195EFD", cursor: "pointer" }}
              onClick={onClickMovoToSignup}
            >
              회원가입
            </span>
          </span>
        </S.AccessBodyButtonDiv>
      </S.AccessBody>
    </S.AccessDiv>
  );
};

export default AccessPage;

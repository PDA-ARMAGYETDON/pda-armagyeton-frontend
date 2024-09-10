import * as S from "./MyPInfo.style";
import FooterNav from "../../../../components/footer-nav/FooterNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateUserPInfo } from "../../../../lib/apis/apis";

const MyPInfoUIPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true); // 비밀번호 일치 여부
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성

  const onClickPageBack = () => {
    navigate(-1);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    checkPasswordMatch(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    checkPasswordMatch(password, value);
  };

  const checkPasswordMatch = (password, confirmPassword) => {
    const match = password === confirmPassword;
    setIsPasswordMatch(match);
    setIsFormValid(match && password.length > 0 && confirmPassword.length > 0);
  };

  const handleSave = async () => {
    await UpdateUserPInfo({ pinfo: password });
    navigate(-1);
  };

  return (
    <>
      <S.Container>
        <S.BackIcon onClick={onClickPageBack} />
        <S.Header>
          <S.Title>비밀번호 변경</S.Title>
        </S.Header>

        <S.UserInfoContainer>
          <S.UserInfoRow
            hasError={!isPasswordMatch && confirmPassword.length > 0}
          >
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              hasError={!isPasswordMatch && confirmPassword.length > 0}
              placeholder="비밀번호를 입력해주세요"
            />
          </S.UserInfoRow>

          <S.UserInfoRow
            hasError={!isPasswordMatch && confirmPassword.length > 0}
          >
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              hasError={!isPasswordMatch && confirmPassword.length > 0}
              placeholder="비밀번호를 다시 입력해주세요"
            />
            {!isPasswordMatch && confirmPassword.length > 0 && (
              <S.ErrorDiv>
                <S.ErrorMessage>
                  <S.ErrorIcon />
                  <span>비밀번호가 일치하지 않습니다.</span>
                </S.ErrorMessage>
              </S.ErrorDiv>
            )}
          </S.UserInfoRow>

          <S.Button onClick={handleSave} disabled={!isFormValid}>
            비밀번호 변경
          </S.Button>
        </S.UserInfoContainer>
      </S.Container>

      <FooterNav />
    </>
  );
};

export default MyPInfoUIPage;

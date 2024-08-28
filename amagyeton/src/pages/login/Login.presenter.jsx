import * as S from "./Login.style";
import HeaderNoLogoPage from "../../components/header-no-logo/header-no-logo";

const LoginUIPage = (props) => {
  return (
    <>
      <HeaderNoLogoPage />
      <S.LoginBody>
        <S.LoginBodyLogo>
          <img src="/images/logo.png" alt="no image" />
          <span>아마곗돈</span>
        </S.LoginBodyLogo>
        <S.LoginForm onSubmit={props.handleSubmit(props.onSubmit)}>
          <S.LoginIdDiv hasError={!!props.errors.username}>
            <label htmlFor="username">아이디</label>
            <input
              id="username"
              type="text"
              {...props.register("username", {
                required: "아이디는 필수 입력입니다.",
              })}
              placeholder="아이디를 입력헤주세요"
            />
          </S.LoginIdDiv>

          <S.LoginIdDiv hasError={!!props.errors.password}>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              {...props.register("password", {
                required: "비밀번호는 필수 입력입니다.",
              })}
              placeholder="비밀번호를 입력헤주세요"
            />
          </S.LoginIdDiv>

          {props.errorMessage && (
            <S.ErrorMessage>
              <S.ErrorIcon />
              <span>{props.errorMessage}</span>
            </S.ErrorMessage>
          )}

          <S.SubmitBtnDiv>
            <S.SubmitBtn
              type="submit"
              disabled={!props.isValid || props.isSubmitting}
              isValid={props.isValid}
              onClick={props.onClickMoveToLogin}
            >
              로그인
            </S.SubmitBtn>
          </S.SubmitBtnDiv>
        </S.LoginForm>
      </S.LoginBody>
    </>
  );
};

export default LoginUIPage;

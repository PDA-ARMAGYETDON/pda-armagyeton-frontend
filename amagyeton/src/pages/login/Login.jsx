import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation.js";
import * as S from "./Login.style";
import HeaderNoLogoPage from "../../components/header-no-logo/header-no-logo";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  const getErrorMessage = () => {
    if (errors.username && errors.password) {
      return "아이디 혹은 비밀번호가 잘못되었습니다";
    } else if (errors.username) {
      return errors.username.message;
    } else if (errors.password) {
      return errors.password.message;
    }
    return null;
  };

  const errorMessage = getErrorMessage();

  return (
    <S.LoginDiv>
      <HeaderNoLogoPage />
      <S.LoginBody>
        <S.LoginBodyLogo>
          <img src="/images/logo.png" alt="no image" />
          <span>아마곗돈</span>
        </S.LoginBodyLogo>
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <S.LoginIdDiv hasError={!!errors.username}>
            <label htmlFor="username">아이디</label>
            <input
              id="username"
              type="text"
              {...register("username", {
                required: "아이디는 필수 입력입니다.",
              })}
              placeholder="아이디를 입력헤주세요"
            />
          </S.LoginIdDiv>

          <S.LoginIdDiv hasError={!!errors.password}>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
              })}
              placeholder="비밀번호를 입력헤주세요"
            />
          </S.LoginIdDiv>

          {errorMessage && (
            <S.ErrorMessage>
              <S.ErrorIcon />
              <span>{errorMessage}</span>
            </S.ErrorMessage>
          )}

          <S.SubmitBtnDiv>
            <S.SubmitBtn
              type="submit"
              disabled={!isValid || isSubmitting}
              isValid={isValid}
            >
              로그인
            </S.SubmitBtn>
          </S.SubmitBtnDiv>
        </S.LoginForm>
      </S.LoginBody>
    </S.LoginDiv>
  );
};

export default LoginPage;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation.js";
import LoginUIPage from "./Login.presenter.jsx";
import AppViewPage from "../../components/app-view/AppView.jsx";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const navigate = useNavigate();

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

  const onClickMoveToLogin = () => {
    // 이 부분에서 로그인의 대한 결과를 받는데
    // 해당 사용자가 모임이 하나도 없는 상태라면 /group/create로
    // 사용자가 모임이 있는 상태라면 /group
    const temp = false;
    if (temp) navigate("/group/main");
    else navigate("/group/pending");
  };

  return (
    <AppViewPage
      children={
        <LoginUIPage
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          onClickMoveToLogin={onClickMoveToLogin}
        />
      }
    />
  );
};

export default LoginPage;

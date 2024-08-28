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
    navigate("/group/create");
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

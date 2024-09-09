import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation.js";
import LoginUIPage from "./Login.presenter.jsx";
import AppViewPage from "../../components/app-view/AppView.jsx";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../lib/apis/apis.js";
import Modal from "./ErrorModal.jsx";
import base64 from "base-64";
import { requestFcmToken } from "../../lib/utils/fcmService.js";
import { useDispatch } from "react-redux";
import {
  setSelectedTeamExist,
  setSelectedUserId,
} from "../../store/reducers/Group.js";
import Toast from "./LogoutToast";

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await LoginUser(data);
      if (response === null) {
        setErrorModalMessage("로그인 정보가 맞지 않습니다.");
        setIsModalOpen(true);
        return;
      }
      console.log(response);
      const token =
        response.headers["authorization"] || response.headers["Authorization"];
      localStorage.setItem("TOKEN", token);

      const payload = token.split(".")[1];
      const decodedPayload = base64.decode(payload);
      const decodedData = JSON.parse(decodedPayload);

      // FCM 토큰 발급
      const userId = decodedData.userId;
      await requestFcmToken(userId);
      console.log("FCM 토큰 발급 완료");

      // 팀 여부에 따라 네비게이션
      dispatch(setSelectedUserId(decodedData.userId));
      dispatch(setSelectedTeamExist(decodedData.isTeamExist));

      if (!decodedData.isTeamExist) {
        navigate("/group/create");
      } else {
        navigate(`/group/${decodedData.teamId}`);
      }
    } catch (error) {
      console.error(error.response?.data || "An error occurred");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const getErrorMessage = () => {
    if (errors.loginId && errors.password) {
      return "아이디 혹은 비밀번호가 잘못되었습니다";
    } else if (errors.loginId) {
      return errors.loginId.message;
    } else if (errors.password) {
      return errors.password.message;
    }
    return null;
  };

  const onClickMoveToLogin = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit)();
  };

  const errorMessage = getErrorMessage();

  useEffect(() => {
    const logoutSuccess = sessionStorage.getItem("logoutSuccess");

    if (logoutSuccess === "true") {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      sessionStorage.removeItem("logoutSuccess");
    }
  }, []);

  return (
    <AppViewPage>
      <>
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
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          message={errorModalMessage}
        />

        {showToast && <Toast message="로그아웃이 정상적으로 처리되었습니다." />}
      </>
    </AppViewPage>
  );
};

export default LoginPage;

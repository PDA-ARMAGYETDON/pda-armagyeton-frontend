import { useForm } from "react-hook-form";
import AppViewPage from "../../../components/app-view/AppView";
import AccountUIPage from "./Account.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AccountPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [errorAgree, setErrorAgree] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (data) => {
    if (isValid) {
      if (!agreeCheck) {
        setErrorAgree(true);
      } else {
        setErrorAgree(false);
        console.log(data);
        navigate(`/group/${id}/account/complete`);
      }
    }
  };

  const onClickCheckAgree = () => {
    setErrorAgree(false);
    setAgreeCheck((prev) => !prev);
  };

  return (
    <AppViewPage>
      <AccountUIPage
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        isValid={isValid}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        onClickCheckAgree={onClickCheckAgree}
        agreeCheck={agreeCheck}
        errorAgree={errorAgree}
      />
    </AppViewPage>
  );
};

export default AccountPage;

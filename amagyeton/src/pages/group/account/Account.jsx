import { useForm } from "react-hook-form";
import AppViewPage from "../../../components/app-view/AppView";
import AccountUIPage from "./Account.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateAccount } from "../../../lib/apis/apis";

const AccountPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [errorAgree, setErrorAgree] = useState(false);
  const [userId, setUserId] = useState(null); // State to store userId from token
  const navigate = useNavigate();
  const { id } = useParams();

  // Extract userId from token stored in local storage
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserId(payload.userId);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  const onSubmit = async (data) => {
    if (isValid) {
      if (!agreeCheck) {
        setErrorAgree(true);
      } else {
        setErrorAgree(false);

        if (userId) {
          const requestData = {
            name: data.name,
            accountPInfo: data.accountPInfo,
            userId: userId,
          };

          try {
            const res = await CreateAccount(requestData);
            console.log(res);
            navigate(`/group/${id}/account/complete`);
          } catch (error) {
            console.error(error);
          }
        } else {
          console.error("User ID is missing");
        }
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

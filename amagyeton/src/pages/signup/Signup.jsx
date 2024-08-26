/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupUIPage from "./Signup.presenter.jsx";
import { useState, useEffect } from "react";
import { schemaStep1, schemaStep2 } from "./validation.js";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // State to hold the current schema based on the step
  const [currentSchema, setCurrentSchema] = useState(schemaStep1);

  // Update the current schema when the step changes
  useEffect(() => {
    if (step === 1) {
      setCurrentSchema(schemaStep1);
    } else if (step === 2) {
      setCurrentSchema(schemaStep2);
    } else {
      setCurrentSchema(null);
    }
  }, [step]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isSubmitting },
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(currentSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [checkId, setCheckId] = useState(false);
  const [checkIdResult, setCheckIdResult] = useState(null);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkEmailResult, setCheckEmailResult] = useState(null);

  const onSubmit = (data) => {
    if (step === 3) {
      // 마지막 단계에서 제출
      console.log("회원가입 완료", data);
      // 회원가입 제출 로직
    } else {
      setStep(step + 1);
    }
  };

  const getErrorMessage = () => {
    if (step === 1) {
      if (errors.username) return errors.username.message;
      if (errors.id) return errors.id.message;
      if (errors.password) return errors.password.message;
    } else if (step === 2) {
      if (errors.email) return errors.email.message;
    }
    return null;
  };

  const errorMessage = getErrorMessage();

  const onClickDuplicateId = () => {
    const idValue = getValues("id");

    if (idValue === "takenId") {
      setCheckId(true);
      setCheckIdResult(false);
    } else {
      setCheckId(true);
      setCheckIdResult(true);
    }
  };

  const onClickDuplicateEmail = () => {
    const emailValue = getValues("email");

    if (emailValue === "takenEmail") {
      setCheckEmail(true);
      setCheckEmailResult(false);
    } else {
      setCheckEmail(true);
      setCheckEmailResult(true);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    if (
      step === 1 &&
      getValues("username") &&
      getValues("id") &&
      getValues("password")
    ) {
      handleSubmit(onSubmit)();
    } else if (step === 2 && getValues("email")) {
      handleSubmit(onSubmit)();
    } else {
      console.log("폼에 오류가 있습니다.");
    }
  };

  const progress = (step / totalSteps) * 100;

  return (
    <SignupUIPage
      register={register}
      handleSubmit={handleSubmit}
      isValid={isValid}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      errors={errors}
      onClickDuplicateId={onClickDuplicateId}
      onClickDuplicateEmail={onClickDuplicateEmail}
      checkId={checkId}
      checkIdResult={checkIdResult}
      checkEmail={checkEmail}
      checkEmailResult={checkEmailResult}
      step={step}
      setStep={setStep}
      handleNextClick={handleNextClick}
      progress={progress}
    />
  );
};

export default SignupPage;

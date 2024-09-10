/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupUIPage from "./Signup.presenter.jsx";
import { useState, useEffect } from "react";
import { schemaStep1, schemaStep2 } from "./validation.js";
import AppViewPage from "../../components/app-view/AppView.jsx";
import { CheckId, LoginUser, registerUser } from "../../lib/apis/apis.js";
import AddressModal from "./AddressModal.jsx";
import SuccessModal from "./SuccessModal.jsx";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);
  const totalSteps = 3;

  const [currentSchema, setCurrentSchema] = useState(schemaStep1);
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

  useEffect(() => {
    if (step === 1) {
      setCurrentSchema(schemaStep1);
    } else if (step === 2) {
      setCurrentSchema(schemaStep2);
    }
  }, [step]);

  useEffect(() => {
    clearErrors();
  }, [currentSchema, clearErrors]);

  const [checkId, setCheckId] = useState(false);
  const [checkIdResult, setCheckIdResult] = useState(null);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkEmailResult, setCheckEmailResult] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [allAgree, setAllAgree] = useState(false);
  const [agree, setAgree] = useState([false, false, false]);
  const [agreeToogle, setAgreeToogle] = useState([false, false, false]);
  const navigate = useNavigate();

  const agreeMessage = [
    "이용 약관에 동의합니다.(필수)",
    "본인의 개인정보를 수집·이용\n하는 것에 동의합니다.(필수)",
    "정책정보 제공을 위한 개인정보\n 수집 및 이용에 동의합니다.(필수)",
  ];

  const agreeDetailMessage = [
    "1. 개인정보의 수집 및 이용 목적\n- 정부 및 지자체의 중소·중견기업 분야별 지원정책 및 참여기회 제공\n2. 수집하는 개인정보의 항목\n- 필수항목 : 이름, 이메일, 휴대폰전화번호\n- 선택항목 : 소속정보",
    "1. 개인정보의 수집 및 이용 목적\n- 정부 및 지자체의 중소·중견기업 분야별 지원정책 및 참여기회 제공\n2. 수집하는 개인정보의 항목\n- 필수항목 : 이름, 이메일, 휴대폰전화번호\n- 선택항목 : 소속정보",
    "1. 개인정보의 수집 및 이용 목적\n- 정부 및 지자체의 중소·중견기업 분야별 지원정책 및 참여기회 제공\n2. 수집하는 개인정보의 항목\n- 필수항목 : 이름, 이메일, 휴대폰전화번호\n- 선택항목 : 소속정보",
  ];

  const onSubmit = async (data) => {
    if (step === 3) {
      if (!allAgree) {
        console.log("모든 약관에 동의해야 합니다.");
        return;
      }

      try {
        const res = await registerUser(data);
        if (res.success) {
          console.log("회원가입에 성공했습니다.");

          const loginData = {
            loginId: data.loginId,
            password: data.password,
          };
          const loginResponse = await LoginUser(loginData);
          const token =
            loginResponse.headers.get("authorization") ||
            loginResponse.headers.get("Authorization");
          localStorage.setItem("TOKEN", token);

          setSignOpen(true);
          console.log("로그인에 성공했습니다.");
          navigate(`/account`);
        } else {
          alert("회원가입에 실패했습니다. " + res.message);
          console.log("회원가입에 실패했습니다.", res.message);
        }
      } catch (error) {
        alert("회원가입 요청 중 오류가 발생했습니다. 다시 시도해주세요.");
        console.error("회원가입 요청 중 오류가 발생했습니다:", error);
      }
    } else {
      setStep(step + 1);
    }
  };

  const onClickDuplicateId = async () => {
    const idValue = getValues("loginId");

    const res = await CheckId(idValue);

    if (!res.success) {
      setCheckId(true);
      setCheckIdResult(false);
    } else {
      setCheckId(true);
      setCheckIdResult(true);
    }
  };

  const onClickDuplicateEmail = async () => {
    const emailValue = getValues("email");

    const res = await CheckId(emailValue);
    console.log(res.message);
    if (!res.success) {
      setCheckEmail(true);
      setCheckEmailResult(res.message);
    } else {
      setCheckEmail(true);
      setCheckEmailResult(res.message);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    if (
      step === 1 &&
      getValues("name") &&
      getValues("loginId") &&
      getValues("password")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 2 &&
      getValues("email") &&
      getValues("address") &&
      getValues("addressDetail")
    ) {
      handleSubmit(onSubmit)();
    } else if (step === 3 && allAgree) {
      handleSubmit(onSubmit)();
    } else {
      alert("입력을 확인해주세요.");
      console.log("폼 입력이 정상적이지 않습니다");
    }
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
    setIsModalOpen(true);
  };

  const handleAddressComplete = (data) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
    setValue("address", data.address);
    setIsModalOpen(false);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
    console.log(addressDetail);
  };

  const progress = (step / totalSteps) * 100;

  const selectAgree = () => {
    setAllAgree((prev) => !prev);
    setAgree((prev) => prev.map(() => !allAgree));
    console.log(agree, allAgree);
  };

  const onClickCurAgree = (num) => () => {
    const temp = [...agree];
    temp[num] = !temp[num];
    setAgree(temp);

    const allTrue = temp.every((item) => item === true);
    if (allTrue) {
      setAllAgree(true);
    } else {
      setAllAgree(false);
    }
  };

  const onClickOpenAgree = (num) => () => {
    const temp = [...agreeToogle];
    temp[num] = !temp[num];
    setAgreeToogle(temp);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalSignupClose = () => {
    setSignOpen(false);
  };

  return (
    <AppViewPage>
      <SignupUIPage
        register={register}
        handleSubmit={handleSubmit}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        // errorMessage={errorMessage}
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
        isOpen={isOpen}
        zipcode={zipcode}
        address={address}
        addressDetail={addressDetail}
        setAddressDetail={setAddressDetail}
        onClickAddressSearch={onClickAddressSearch}
        onChangeAddressDetail={onChangeAddressDetail}
        handleAddressComplete={handleAddressComplete}
        agreeMessage={agreeMessage}
        agreeDetailMessage={agreeDetailMessage}
        setAgreeToogle={setAgreeToogle}
        agreeToogle={agreeToogle}
        onClickOpenAgree={onClickOpenAgree}
        allAgree={allAgree}
        setAllAgree={setAllAgree}
        selectAgree={selectAgree}
        agree={agree}
        onClickCurAgree={onClickCurAgree}
      />
      <AddressModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        handleAddressComplete={handleAddressComplete}
      />
      <SuccessModal isOpen={signOpen} onClose={handleModalSignupClose} />
    </AppViewPage>
  );
};

export default SignupPage;

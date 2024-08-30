import { useForm } from "react-hook-form";
import AppViewPage from "../../../components/app-view/AppView";
import GroupWriteUIPage from "./GroupWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  schemaStep1,
  schemaStep2,
  schemaStep3,
  schemaStep4,
  schemaStep5,
} from "./varidation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkHeadCount } from "../../../store/reducers/HeadCount";
import { useNavigate } from "react-router-dom";

const GroupWritePage = () => {
  const headCount = useSelector((state) => state.headCount.HeadCount);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [currentSchema, setCurrentSchema] = useState(schemaStep1);
  const [meetingSize, setMeetingSize] = useState(2);
  const [curCategory, setCurCategory] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [payDate, setPayDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curRole, setCurRole] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectOnline, setSelectOnline] = useState("");
  const categoryItem = ["여행", "식비", "취미", "저축", "결혼자금", "기타"];
  const totalSteps = 5;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(currentSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (step === 1) {
      setCurrentSchema(schemaStep1);
    } else if (step === 2) {
      setCurrentSchema(schemaStep2(headCount));
    } else if (step === 3) {
      setCurrentSchema(schemaStep3);
    } else if (step === 4) {
      setCurrentSchema(schemaStep4);
    } else if (step === 5) {
      setCurrentSchema(schemaStep5);
    }
  }, [step]);

  useEffect(() => {
    clearErrors();
  }, [currentSchema, clearErrors]);

  const onSubmit = (data) => {
    if (step === totalSteps) {
      console.log("모임생성 완료", data);
      navigate("/group/invite");
    } else {
      console.log("모임생성 진행중", data);
      setStep(step + 1);
    }
  };

  const handleInitialChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");
    const numericValue = Number(rawValue);
    if (isNaN(numericValue)) {
      setValue("initialInvestment", "", { shouldValidate: true });
      return;
    }
    setValue("initialInvestment", numericValue, { shouldValidate: true });
    //setFormattedInitialInvestment(formatCurrency(numericValue));
    //e.target.value = formatCurrency(numericValue);
  };

  const handlePerChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");
    const numericValue = Number(rawValue);
    if (isNaN(numericValue)) {
      setValue("perPersonPayment", "", { shouldValidate: true });
      return;
    }
    setValue("perPersonPayment", numericValue, { shouldValidate: true });
    //e.target.value = formatCurrency(numericValue);
  };

  const progress = (step / totalSteps) * 100;

  const handleDecrease = () => {
    if (meetingSize > 2) {
      const newSize = meetingSize - 1;
      dispatch(checkHeadCount(newSize));
      setMeetingSize(newSize);
      setValue("meetingSize", newSize);
    }
  };

  const handleIncrease = () => {
    if (meetingSize < 5) {
      const newSize = meetingSize + 1;
      dispatch(checkHeadCount(newSize));
      setMeetingSize(newSize);
      setValue("meetingSize", newSize);
    }
  };

  const onClickSelectCategory = (name) => () => {
    setCurCategory(name);
    setValue("category", name);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (
      step === 1 &&
      getValues("meetingName") &&
      getValues("meetingSize") &&
      getValues("category") &&
      getValues("endDate")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 2 &&
      getValues("initialInvestment") &&
      getValues("perPersonPayment") &&
      getValues("paymentDate") &&
      getValues("paymentCycle")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 3 &&
      getValues("approval") &&
      getValues("fluctuationRate") &&
      getValues("emergencyApproval")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 4 &&
      getValues("sellFluctuationRate") &&
      getValues("sellApproval")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 5 &&
      getValues("cancelRoleAllRateMax") &&
      getValues("cancelRoleAllRateMin")
    ) {
      handleSubmit(onSubmit)();
      navigate("/");
    } else {
      console.log("폼 입력이 정상적이지 않습니다");
    }
  };

  const handleCheckDate = (date) => {
    setCheckInDate(date);
    setValue("endDate", date);
  };

  const handlePayCheckDate = (date) => {
    setPayDate(date);
    setValue("paymentDate", date);
  };

  const onChangeApproval = (num) => {
    setValue("approval", num);
  };

  const onChangeEmergencyApproval = (num) => {
    setValue("emergencyApproval", num);
  };

  const onChangeSellApproval = (num) => {
    setValue("sellApproval", num);
    console.log(getValues("sellApproval"));
  };

  const openRoleModal = (name) => {
    setIsModalOpen(true);
    setCurRole(name);
  };

  const closeRoleModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppViewPage>
      <GroupWriteUIPage
        register={register}
        handleSubmit={handleSubmit}
        control={control}
        errors={errors}
        isValid={isValid}
        onSubmit={handleSubmit(onSubmit)}
        step={step}
        totalSteps={totalSteps}
        setStep={setStep}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        meetingSize={meetingSize}
        categoryItem={categoryItem}
        curCategory={curCategory}
        onClickSelectCategory={onClickSelectCategory}
        handleNextClick={handleNextClick}
        handleCheckDate={handleCheckDate}
        checkInDate={checkInDate}
        isSubmitting={isSubmitting}
        progress={progress}
        getValues={getValues}
        setValue={setValue}
        handleInitialChange={handleInitialChange}
        handlePerChange={handlePerChange}
        handlePayCheckDate={handlePayCheckDate}
        payDate={payDate}
        setSelectOnline={setSelectOnline}
        onChangeApproval={onChangeApproval}
        onChangeEmergencyApproval={onChangeEmergencyApproval}
        onChangeSellApproval={onChangeSellApproval}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        openRoleModal={openRoleModal}
        closeRoleModal={closeRoleModal}
        curRole={curRole}
      />
    </AppViewPage>
  );
};

export default GroupWritePage;

import { useForm } from "react-hook-form";
import AppViewPage from "../../../components/app-view/AppView";
import GroupWriteUIPage from "./GroupWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  schemaStep1,
  schemaStep2,
  schemaStep3,
  schemaStep4,
} from "./varidation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkHeadCount } from "../../../store/reducers/HeadCount";
import { useNavigate } from "react-router-dom";
import { createGroup } from "../../../lib/apis/apis";
import { setSelectedInviteCode } from "../../../store/reducers/Group";

const GroupWritePage = () => {
  const headCount = useSelector((state) => state.headCount.HeadCount);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [currentSchema, setCurrentSchema] = useState(schemaStep1);
  const [memberCount, setMemberCount] = useState(2);
  const [curCategory, setCurCategory] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [payDate, setPayDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curRole, setCurRole] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectOnline, setSelectOnline] = useState("");
  const categoryItem = ["여행", "식비", "취미", "저축", "결혼자금", "기타"];
  const totalSteps = 4;
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
    defaultValues: {
      prdyVressRt: "",
    },
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
    }
  }, [step]);

  useEffect(() => {
    clearErrors();
  }, [currentSchema, clearErrors]);

  const onSubmit = async (data) => {
    data.startAt = new Date().toISOString();
    data.baseAmt = Number(data.baseAmt);
    data.depositAmt = Number(data.depositAmt);
    data.prdyVressRt = Number(data.prdyVressRt);
    data.period = data.period === "한달" ? "MONTH" : "WEEK";
    if (step === totalSteps) {
      console.log("모임생성 완료", data);

      try {
        const res = await createGroup(data);
        console.log(res.data.data.inviteCode);
        dispatch(setSelectedInviteCode(res.data.data.inviteCode));
        //dispatch(setSelectedGroupId());
        // 이 부분에 새로 받은 토큰의 그룹 id를 리덕스에 저장

        navigate("/group/invite");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("모임생성 진행중", data);
      setStep(step + 1);
    }
  };

  const handleInitialChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");
    const numericValue = Number(rawValue);

    if (isNaN(numericValue)) {
      setValue("baseAmt", "", { shouldValidate: true });
      return;
    }

    setValue("baseAmt", numericValue, { shouldValidate: true });
  };

  const handlePerChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");
    const numericValue = Number(rawValue);

    if (isNaN(numericValue)) {
      setValue("depositAmt", "", { shouldValidate: true });
      return;
    }

    setValue("depositAmt", numericValue, { shouldValidate: true });
  };

  const progress = (step / totalSteps) * 100;

  const handleDecrease = () => {
    if (memberCount > 2) {
      const newSize = memberCount - 1;
      dispatch(checkHeadCount(newSize));
      setMemberCount(newSize);
      setValue("headCount", newSize);
    }
  };

  const handleIncrease = () => {
    if (memberCount < 5) {
      const newSize = memberCount + 1;
      dispatch(checkHeadCount(newSize));
      setMemberCount(newSize);
      setValue("headCount", newSize);
    }
  };

  const onClickSelectCategory = (name) => () => {
    const categoryMapping = {
      여행: "TRAVEL",
      식비: "MEAL",
      취미: "HOBBY",
      저축: "SAVING",
      결혼자금: "WEDDING",
      기타: "ETC",
    };

    const mappedName = categoryMapping[name] || name;
    setCurCategory(mappedName);
    setValue("category", mappedName, { shouldValidate: true });
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (
      step === 1 &&
      getValues("name") &&
      getValues("headCount") &&
      getValues("category") &&
      getValues("endAt")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 2 &&
      getValues("baseAmt") &&
      getValues("depositAmt") &&
      getValues("payDate") &&
      getValues("period")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 3 &&
      getValues("tradeUpvotes") &&
      getValues("prdyVressRt") &&
      getValues("urgentTradeUpvotes")
    ) {
      handleSubmit(onSubmit)();
    } else if (
      step === 4 &&
      getValues("maxProfitRt") &&
      getValues("maxLossRt")
    ) {
      handleSubmit(onSubmit)();
    } else {
      console.log("폼 입력이 정상적이지 않습니다");
    }
  };

  const handleCheckDate = (date) => {
    setCheckInDate(date.toISOString());
    setValue("endAt", date.toISOString(), { shouldValidate: true });
  };

  const handlePayCheckDate = (date) => {
    setPayDate(date);
    setValue("payDate", date);
  };

  const onChangeApproval = (num) => {
    setValue("tradeUpvotes", num, { shouldValidate: true });
  };

  const onChangeEmergencyApproval = (num) => {
    setValue("urgentTradeUpvotes", num, { shouldValidate: true });
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
        memberCount={memberCount}
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
        //onChangeSellApproval={onChangeSellApproval}
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

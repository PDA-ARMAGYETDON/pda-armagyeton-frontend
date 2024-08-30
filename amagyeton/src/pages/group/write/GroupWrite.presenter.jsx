import { useSelector } from "react-redux";
import HeaderNoLogoPage from "../../../components/header-no-logo/header-no-logo";
import CustomStyledSlider from "../../../components/slider-bar/SliderBar";
import DatePickerPage from "./DatePicker";
import { formatCurrency } from "../../../lib/utils/formatCurrency";
import * as S from "./GroupWrite.style";
import RoleModal from "./RoleModal";

const GroupWriteUIPage = (props) => {
  console.log("dsadsaf : " + props.isModalOpen);
  const headCount = useSelector((state) => state.headCount.HeadCount);
  return (
    <>
      {props.isModalOpen && (
        <RoleModal
          onClose={props.closeRoleModal}
          isOpen={props.isModalOpen}
          role={props.curRole}
        />
      )}
      <HeaderNoLogoPage />
      <S.GroupWriteDiv>
        <S.GroupWriteIntro>
          <S.ProgressBarContainer>
            <S.ProgressBar progress={props.progress} />
          </S.ProgressBarContainer>
          <p>{`${props.step}/${props.totalSteps}단계`}</p>
          <S.ColorSpan>
            {props.step === 1
              ? "함께하고 싶은 새로운 팀원을"
              : props.step === 2
              ? "투자금액을 어떻게 모을지"
              : props.step === 3
              ? "주식을 주문하기 위한 규칙을"
              : props.step === 4
              ? "매매를 발동하기 위한 규칙을"
              : "우리 모임의 해체 규정을"}
          </S.ColorSpan>
          <br />
          <span>{props.step === 1 ? "초대해보세요" : "설정해주세요"}</span>
        </S.GroupWriteIntro>
        <S.GroupWriteForm onSubmit={props.handleSubmit(props.onSubmit)}>
          {props.step === 1 && (
            <>
              <S.GroupWriteItem>
                <label>모임명</label>
                <S.GroupWriteName
                  {...props.register("meetingName")}
                  hasError={!!props.errors.meetingName}
                />
                {props.errors.meetingName && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.meetingName.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>
                  모임인원 <span>(최대 인원은 5명입니다)</span>
                </label>
                <S.MeetingSize>
                  <button type="button" onClick={props.handleDecrease}>
                    -
                  </button>
                  <span {...props.register("meetingSize")}>
                    {props.meetingSize}
                  </span>
                  <button type="button" onClick={props.handleIncrease}>
                    +
                  </button>
                </S.MeetingSize>
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>카테고리</label>
                <S.GroupWriteCategory>
                  {props.categoryItem.map((e, i) => (
                    <S.CategorySpan
                      {...props.register("category")}
                      key={i}
                      onClick={props.onClickSelectCategory(e)}
                      isCheck={props.curCategory === e}
                    >
                      {e}
                    </S.CategorySpan>
                  ))}
                </S.GroupWriteCategory>
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>모임 종료일</label>
                <div style={{ position: "relative", width: "90%" }}>
                  <DatePickerPage
                    {...props.register("endDate")}
                    handleCheckDate={props.handleCheckDate}
                    checkInDate={props.checkInDate}
                    setValue={props.setValue}
                    fieldName="endDate"
                  />
                  <S.CalendarIcon
                    style={{ position: "absolute", right: "10px", top: "10px" }}
                  />
                </div>
              </S.GroupWriteItem>
            </>
          )}
          {props.step === 2 && (
            <>
              <S.GroupWriteItem>
                <label>1인당 초기 투자금</label>
                <S.GroupAmountDiv>
                  <S.GroupWriteName
                    {...props.register("initialInvestment")}
                    //value={props.formattedInitialInvestment}
                    hasError={!!props.errors.initialInvestment}
                    onChange={props.handleInitialChange}
                  />
                  <S.AmountSpan>원</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.initialInvestment && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.initialInvestment.message}</span>
                  </S.ErrorMessage>
                )}
                {props.getValues("initialInvestment") > 0 && (
                  <span
                    style={{ color: "#979797", fontSize: "0.85rem" }}
                  >{`우리 모임의 초기 투자금은 ${formatCurrency(
                    props.getValues("initialInvestment") * headCount
                  )}원 입니다`}</span>
                )}
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>1인당 기간별 납부 금액</label>
                <S.GroupAmountDiv>
                  <S.GroupWriteName
                    {...props.register("perPersonPayment")}
                    hasError={!!props.errors.perPersonPayment}
                    onChange={props.handlePerChange}
                  />
                  <S.AmountSpan>원</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.perPersonPayment && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.perPersonPayment.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>납부시작일</label>
                <div style={{ position: "relative", width: "90%" }}>
                  <DatePickerPage
                    {...props.register("paymentDate")}
                    handleCheckDate={props.handlePayCheckDate}
                    checkInDate={props.payDate}
                    setValue={props.setValue}
                    fieldName="paymentDate"
                  />
                  <S.CalendarIcon
                    style={{ position: "absolute", right: "10px", top: "10px" }}
                  />
                </div>
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>납부주기일</label>
                <S.CustomSelect
                  {...props.register("paymentCycle")}
                  onChange={(data) => {
                    props.setSelectOnline(data.value);
                    props.setValue("paymentCycle", data.value, {
                      shouldValidate: true,
                    });
                  }}
                  options={[
                    { value: "일주일", label: "일주일" },
                    { value: "한달", label: "한달" },
                  ]}
                  defaultValue={[{ value: "일주일", label: "일주일" }]}
                  components={{
                    IndicatorSeparator: null,
                  }}
                />
              </S.GroupWriteItem>
            </>
          )}
          {props.step === 3 && (
            <>
              <S.GroupWriteItem>
                <div>
                  <label>매매 규칙</label>
                  <S.RoleIcon onClick={() => props.openRoleModal("bargain")} />
                </div>
                <li>
                  <span>찬성 인원</span>
                </li>
                <CustomStyledSlider
                  {...props.register("approval")}
                  onChangeApproval={props.onChangeApproval}
                  name="approval"
                />
                {props.errors.approval && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.approval.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <div>
                  <label>긴급 매도 규칙</label>
                  <S.RoleIcon
                    onClick={() => props.openRoleModal("emergencyBargain")}
                  />
                </div>
                <div style={{ marginBottom: "30px" }}>
                  <li>
                    <span>전날 대비 등락율</span>
                  </li>
                  <S.GroupAmountDiv style={{ marginLeft: "22px" }}>
                    <S.GroupWriteName
                      {...props.register("fluctuationRate")}
                      hasError={!!props.errors.fluctuationRate}
                      onChange={(e) => {
                        const numericValue = Number(e.target.value);
                        if (isNaN(Number(e.target.value))) {
                          props.setValue("fluctuationRate", "", {
                            shouldValidate: true,
                          });
                        } else {
                          props.setValue("fluctuationRate", numericValue, {
                            shouldValidate: true,
                          });
                        }
                      }}
                    />
                    <S.AmountSpan>%</S.AmountSpan>
                  </S.GroupAmountDiv>
                  {props.errors.fluctuationRate && (
                    <S.ErrorMessage>
                      <S.ErrorIcon />
                      <span>{props.errors.fluctuationRate.message}</span>
                    </S.ErrorMessage>
                  )}
                </div>
                <li>
                  <span>찬성 인원</span>
                </li>
                <CustomStyledSlider
                  {...props.register("emergencyApproval")}
                  onChangeEmergencyApproval={props.onChangeEmergencyApproval}
                  name="emergencyApproval"
                  setValue={props.setValue}
                />
                {props.errors.emergencyApproval && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.emergencyApproval.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
            </>
          )}

          {props.step === 4 && (
            <>
              <S.GroupWriteItem>
                <div>
                  <label>매도 규칙</label>
                  <S.RoleIcon onClick={() => props.openRoleModal("sell")} />
                </div>
                <li>
                  <span>전날 대비 등락율</span>
                </li>
                <S.GroupAmountDiv style={{ marginLeft: "22px" }}>
                  <S.GroupWriteShort
                    {...props.register("sellFluctuationRate")}
                    hasError={!!props.errors.sellFluctuationRate}
                    onChange={(e) => {
                      const numericValue = Number(e.target.value);
                      if (isNaN(Number(e.target.value))) {
                        props.setValue("sellFluctuationRate", "", {
                          shouldValidate: true,
                        });
                      } else {
                        props.setValue("sellFluctuationRate", numericValue, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  <S.AmountSpan>% 하락</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.sellFluctuationRate && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.sellFluctuationRate.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <div>
                  <label>매수 규칙</label>
                  <S.RoleIcon onClick={() => props.openRoleModal("buy")} />
                </div>
                <li>
                  <span>찬성 인원</span>
                </li>
                <CustomStyledSlider
                  {...props.register("sellApproval")}
                  onChangeSellApproval={props.onChangeSellApproval}
                  name="sellApproval"
                  setValue={props.setValue}
                />
                {props.errors.sellApproval && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.sellApproval.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
            </>
          )}

          {props.step === 5 && (
            <>
              <S.GroupWriteItem>
                <div>
                  <label>해체 규정</label>
                  <S.RoleIcon
                    onClick={() => props.openRoleModal("dissolution")}
                  />
                </div>
                <li style={{ marginBottom: "10px" }}>
                  <span>전날 수익률</span>
                </li>
                <S.GroupAmountDiv style={{ marginLeft: "22px" }}>
                  <span style={{ fontSize: "0.9rem" }}>최대</span>
                  <S.GroupWriteShort
                    {...props.register("cancelRoleAllRateMax")}
                    hasError={!!props.errors.cancelRoleAllRateMax}
                    onChange={(e) => {
                      const numericValue = Number(e.target.value);
                      if (isNaN(Number(e.target.value))) {
                        props.setValue("cancelRoleAllRateMax", "", {
                          shouldValidate: true,
                        });
                      } else {
                        props.setValue("cancelRoleAllRateMax", numericValue, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  <S.AmountSpan>% 달성</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.cancelRoleAllRateMax && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.cancelRoleAllRateMax.message}</span>
                  </S.ErrorMessage>
                )}

                <S.GroupAmountDiv style={{ marginLeft: "22px" }}>
                  <span style={{ fontSize: "0.9rem" }}>최소</span>
                  <S.GroupWriteShort
                    {...props.register("cancelRoleAllRateMin")}
                    hasError={!!props.errors.cancelRoleAllRateMin}
                    onChange={(e) => {
                      const numericValue = Number(e.target.value);
                      if (isNaN(Number(e.target.value))) {
                        props.setValue("cancelRoleAllRateMin", "", {
                          shouldValidate: true,
                        });
                      } else {
                        props.setValue("cancelRoleAllRateMin", numericValue, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  <S.AmountSpan>% 하락</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.cancelRoleAllRateMin && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.cancelRoleAllRateMin.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
            </>
          )}
          <S.SubmitBtnDiv step={props.step}>
            {props.step >= 2 && (
              <S.prevStepDiv onClick={() => props.setStep((prev) => prev - 1)}>
                <S.prevStepIcon />
                <S.prevStep>이전</S.prevStep>
              </S.prevStepDiv>
            )}
            {props.step === 5 ? (
              <S.SubmitDiv
                onClick={props.handleNextClick}
                type="button"
                isValid={props.isValid}
                disabled={!props.isValid || props.isSubmitting}
              >
                <span>확정하기</span>
                <S.NextIcon
                  onClick={() => props.openRoleModal("dissolution")}
                />
              </S.SubmitDiv>
            ) : (
              <S.SubmitDiv
                onClick={props.handleNextClick}
                disabled={!props.isValid || props.isSubmitting}
                isValid={props.isValid}
                type="button"
              >
                <span>다음으로</span>
                <S.NextIcon />
              </S.SubmitDiv>
            )}
          </S.SubmitBtnDiv>
        </S.GroupWriteForm>
      </S.GroupWriteDiv>
    </>
  );
};

export default GroupWriteUIPage;

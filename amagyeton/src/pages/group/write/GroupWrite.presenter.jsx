import { useSelector } from "react-redux";
import HeaderNoLogoPage from "../../../components/header-no-logo/header-no-logo";
import CustomStyledSlider from "../../../components/slider-bar/SliderBar";
import DatePickerPage from "./DatePicker";
import { formatCurrency } from "../../../lib/utils/formatCurrency";
import * as S from "./GroupWrite.style";
import RoleModal from "./RoleModal";

const GroupWriteUIPage = (props) => {
  const headCount = useSelector((state) => state.headCount.headCount);
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
              : props.step === 4 && "우리 모임의 해체 규정을"}
          </S.ColorSpan>
          <br />
          <span style={{ fontSize: "1.3rem" }}>
            {props.step === 1 ? "초대해보세요" : "설정해주세요"}
          </span>
        </S.GroupWriteIntro>
        <S.GroupWriteForm onSubmit={props.handleSubmit(props.onSubmit)}>
          {props.step === 1 && (
            <>
              <S.GroupWriteItem>
                <label>모임명</label>
                <S.GroupWriteName
                  {...props.register("name")}
                  hasError={!!props.errors.name}
                />
                {props.errors.name && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.name.message}</span>
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
                  <span {...props.register("headCount")}>
                    {props.memberCount}
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
                    {...props.register("endAt")}
                    handleCheckDate={props.handleCheckDate}
                    checkInDate={props.checkInDate}
                    setValue={props.setValue}
                    fieldName="endAt"
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
                    {...props.register("baseAmt")}
                    hasError={!!props.errors.baseAmt}
                    onChange={props.handleInitialChange}
                    type="number"
                  />
                  <S.AmountSpan>원</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.baseAmt && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.baseAmt.message}</span>
                  </S.ErrorMessage>
                )}
                {props.getValues("baseAmt") > 0 && (
                  <span
                    style={{ color: "#979797", fontSize: "0.85rem" }}
                  >{`우리 모임의 초기 투자금은 ${formatCurrency(
                    props.getValues("baseAmt") * headCount
                  )}원 입니다`}</span>
                )}
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>1인당 기간별 납부 금액</label>
                <S.GroupAmountDiv>
                  <S.GroupWriteName
                    {...props.register("depositAmt")}
                    hasError={!!props.errors.depositAmt}
                    onChange={props.handlePerChange}
                    type="number"
                  />
                  <S.AmountSpan>원</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.depositAmt && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.depositAmt.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>납부시작일</label>
                <div style={{ position: "relative", width: "90%" }}>
                  <DatePickerPage
                    {...props.register("payDate")}
                    handleCheckDate={props.handlePayCheckDate}
                    checkInDate={props.payDate}
                    setValue={props.setValue}
                    fieldName="payDate"
                  />
                  <S.CalendarIcon
                    style={{ position: "absolute", right: "10px", top: "10px" }}
                  />
                </div>
              </S.GroupWriteItem>
              <S.GroupWriteItem>
                <label>납부주기일</label>
                <S.CustomSelect
                  {...props.register("period")}
                  onChange={(data) => {
                    props.setSelectOnline(data.value);
                    props.setValue("period", data.value, {
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
                  {...props.register("tradeUpvotes")}
                  onChangeApproval={props.onChangeApproval}
                  name="tradeUpvotes"
                />
                {props.errors.tradeUpvotes && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.tradeUpvotes.message}</span>
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
                      {...props.register("prdyVrssRt")}
                      hasError={!!props.errors.prdyVrssRt}
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === "" || isNaN(Number(value))) {
                          props.setValue("prdyVrssRt", "", {
                            shouldValidate: true,
                          });
                        } else {
                          const numericValue = Number(value);
                          props.setValue("prdyVrssRt", numericValue, {
                            shouldValidate: true,
                          });
                        }
                      }}
                    />
                    <S.AmountSpan>%</S.AmountSpan>
                  </S.GroupAmountDiv>
                  {props.errors.prdyVrssRt && (
                    <S.ErrorMessage>
                      <S.ErrorIcon />
                      <span>{props.errors.prdyVrssRt.message}</span>
                    </S.ErrorMessage>
                  )}
                </div>
                <li>
                  <span>찬성 인원</span>
                </li>
                <CustomStyledSlider
                  {...props.register("urgentTradeUpvotes")}
                  onChangeEmergencyApproval={props.onChangeEmergencyApproval}
                  name="urgentTradeUpvotes"
                  setValue={props.setValue}
                />
                {props.errors.urgentTradeUpvotes && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.urgentTradeUpvotes.message}</span>
                  </S.ErrorMessage>
                )}
              </S.GroupWriteItem>
            </>
          )}

          {props.step === 4 && (
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
                    {...props.register("maxProfitRt")}
                    hasError={!!props.errors.maxProfitRt}
                    onChange={(e) => {
                      const numericValue = Number(e.target.value);
                      if (isNaN(Number(e.target.value))) {
                        props.setValue("maxProfitRt", "", {
                          shouldValidate: true,
                        });
                      } else {
                        props.setValue("maxProfitRt", numericValue, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  <S.AmountSpan>% 달성</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.maxProfitRt && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.maxProfitRt.message}</span>
                  </S.ErrorMessage>
                )}

                <S.GroupAmountDiv style={{ marginLeft: "22px" }}>
                  <span style={{ fontSize: "0.9rem" }}>최소</span>
                  <S.GroupWriteShort
                    {...props.register("maxLossRt")}
                    hasError={!!props.errors.maxLossRt}
                    onChange={(e) => {
                      const numericValue = Number(e.target.value);
                      if (isNaN(Number(e.target.value))) {
                        props.setValue("maxLossRt", "", {
                          shouldValidate: true,
                        });
                      } else {
                        props.setValue("maxLossRt", numericValue, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  <S.AmountSpan>% 하락</S.AmountSpan>
                </S.GroupAmountDiv>
                {props.errors.maxLossRt && (
                  <S.ErrorMessage>
                    <S.ErrorIcon />
                    <span>{props.errors.maxLossRt.message}</span>
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
            {props.step === 4 ? (
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

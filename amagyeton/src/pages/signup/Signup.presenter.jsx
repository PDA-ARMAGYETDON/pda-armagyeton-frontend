/* eslint-disable react/prop-types */
import * as S from "./Signup.style.js";
import HeaderNoLogoPage from "../../components/header-no-logo/header-no-logo";

import React from "react";

const SignupUIPage = (props) => {
  return (
    <>
      <HeaderNoLogoPage />
      <S.SignupBody>
        <S.SignupBodyLogo>
          <img src="/images/logo.png" alt="no image" />
          <span>아마곗돈</span>
        </S.SignupBodyLogo>
        <S.SignupForm onSubmit={props.handleSubmit(props.onSubmit)}>
          <S.ProgressBarContainer>
            <S.ProgressBar progress={props.progress} />
          </S.ProgressBarContainer>
          <S.StageCount>
            <div>{props.step} / 3단계</div>
            <div>
              {props.step === 1
                ? "기본 정보 입력"
                : props.step === 2
                ? "상세 정보 입력"
                : "약관 동의"}
            </div>
          </S.StageCount>

          {props.step === 1 && (
            <>
              <S.SignupIdDiv hasError={!!props.errors.name}>
                <label htmlFor="name">이름</label>
                <input
                  id="name"
                  type="text"
                  {...props.register("name", {
                    required: "이름은 필수 입력입니다.",
                  })}
                  placeholder="이름을 입력헤주세요"
                />
                {props.errors.name && (
                  <S.ErrorDiv>
                    <S.ErrorMessage>
                      <S.ErrorIcon />
                      <span>{props.errors.name.message}</span>
                    </S.ErrorMessage>
                  </S.ErrorDiv>
                )}
              </S.SignupIdDiv>

              <S.DuplicateIdCheck hasError={!!props.errors.loginId}>
                <label htmlFor="loginId">아이디</label>
                <S.IdDuplicateCheckDiv>
                  <input
                    id="loginId"
                    type="text"
                    {...props.register("loginId", {
                      required: "아이디는 필수 입력입니다.",
                    })}
                    placeholder="아이디를 입력헤주세요"
                  />
                  <S.EmailButton
                    onClick={props.onClickDuplicateId}
                    type="button"
                  >
                    중복 확인
                  </S.EmailButton>
                </S.IdDuplicateCheckDiv>
                {props.errors.id ? (
                  <S.ErrorDiv>
                    <S.ErrorMessage>
                      <S.ErrorIcon />
                      <span>{props.errors.id.message}</span>
                    </S.ErrorMessage>
                  </S.ErrorDiv>
                ) : props.checkId ? (
                  <S.CheckIdMessage checkIdResult={props.checkIdResult}>
                    {props.checkIdResult
                      ? "사용 가능한 아이디 입니다"
                      : "이미 사용중인 아이디 입니다"}
                  </S.CheckIdMessage>
                ) : null}
              </S.DuplicateIdCheck>

              <S.SignupIdDiv hasError={!!props.errors.password}>
                <label htmlFor="password">비밀번호</label>
                <input
                  id="password"
                  type="password"
                  {...props.register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                  })}
                  placeholder="비밀번호를 입력헤주세요"
                />
                {props.errors.password && (
                  <S.ErrorDiv>
                    <S.ErrorMessage>
                      <S.ErrorIcon />
                      <span>{props.errors.password.message}</span>
                    </S.ErrorMessage>
                  </S.ErrorDiv>
                )}
              </S.SignupIdDiv>
            </>
          )}

          {props.step === 2 && (
            <div>
              <S.DuplicateIdCheck hasError={!!props.errors.email}>
                <label htmlFor="email">이메일</label>
                <S.IdDuplicateCheckDiv>
                  <input
                    id="email"
                    type="text"
                    {...props.register("email", {
                      required: "이메일은 필수 입력입니다.",
                    })}
                    placeholder="이메일을 입력헤주세요"
                  />
                  <S.EmailButton
                    onClick={props.onClickDuplicateEmail}
                    type="button"
                  >
                    중복 확인
                  </S.EmailButton>
                </S.IdDuplicateCheckDiv>
                {props.errors.email ? (
                  <S.ErrorDiv>
                    <S.ErrorMessage>
                      <S.ErrorIcon />
                      <span>{props.errors.email.message}</span>
                    </S.ErrorMessage>
                  </S.ErrorDiv>
                ) : props.checkEmail ? (
                  <S.CheckIdMessage checkIdResult={props.checkEmailResult}>
                    {props.checkEmailResult}
                  </S.CheckIdMessage>
                ) : null}
              </S.DuplicateIdCheck>
              <S.DuplicateIdCheck hasError={!!props.errors.id}>
                <label htmlFor="id">주소</label>
                <S.IdDuplicateCheckDiv>
                  <input
                    id="address"
                    type="text"
                    {...props.register("address", {
                      required: "주소는 필수 입력입니다.",
                    })}
                  />
                  <S.AddressButton
                    type="button"
                    onClick={props.onClickAddressSearch}
                  >
                    검색
                  </S.AddressButton>
                </S.IdDuplicateCheckDiv>
              </S.DuplicateIdCheck>
              <S.SignupIdDiv hasError={!!props.errors.name}>
                <label htmlFor="name">상세주소</label>
                <input
                  id="addressDetail"
                  type="text"
                  {...props.register("addressDetail", {
                    required: "상세주소는 필수 입력입니다.",
                  })}
                  value={props.addressDetail}
                  onChange={props.onChangeAddressDetail}
                />
                {props.errors.addressDetail && (
                  <S.ErrorDiv>
                    <S.ErrorMessage>
                      <S.ErrorIcon />
                      <span>{props.errors.addressDetail.message}</span>
                    </S.ErrorMessage>
                  </S.ErrorDiv>
                )}
              </S.SignupIdDiv>
            </div>
          )}

          {props.step === 3 && (
            <div>
              <S.SignupIdDiv>
                <S.AllAgreeDiv
                  onClick={props.selectAgree}
                  allAgree={props.allAgree}
                >
                  <S.AllCheckIcon />
                  <span>모든 약관에 동의합니다</span>
                </S.AllAgreeDiv>
                {props.agreeMessage.map((e, i) => {
                  return (
                    <>
                      <S.AgreeDiv key={i}>
                        <S.AgreeMessageDiv
                          isCheck={props.agree[i]}
                          onClick={props.onClickCurAgree(i)}
                        >
                          <div>
                            <S.CheckIcon />
                          </div>
                          <div>
                            {e.split("\n").map((line, j) => (
                              <div key={j}>{line}</div>
                            ))}
                          </div>
                        </S.AgreeMessageDiv>
                        <div>
                          <S.AgreeDetail onClick={props.onClickOpenAgree(i)} />
                        </div>
                      </S.AgreeDiv>
                      {props.agreeToogle[i] && (
                        <S.AgreeDetailMessage>
                          {props.agreeDetailMessage[i]
                            .split("\n")
                            .map((e, idx) => (
                              <React.Fragment key={idx}>
                                {e}
                                <br />
                              </React.Fragment>
                            ))}
                        </S.AgreeDetailMessage>
                      )}
                    </>
                  );
                })}
              </S.SignupIdDiv>
            </div>
          )}
          <S.SubmitBtnDiv step={props.step}>
            {props.step >= 2 && (
              <S.prevStepDiv
                onClick={() => props.setStep((prev) => (prev -= 1))}
              >
                <S.prevStepIcon />
                <S.prevStep>이전</S.prevStep>
              </S.prevStepDiv>
            )}
            {props.step === 3 ? (
              <S.SubmitDiv
                onClick={props.handleNextClick}
                type="button"
                isValid={props.allAgree}
              >
                <span>회원가입</span>
                <S.NextIcon />
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
        </S.SignupForm>
      </S.SignupBody>
    </>
  );
};

export default SignupUIPage;

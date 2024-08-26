/* eslint-disable react/prop-types */
import * as S from "./Signup.style.js";
import HeaderNoLogoPage from "../../components/header-no-logo/header-no-logo";

const SignupUIPage = (props) => {
  return (
    <>
      <S.SignupDiv>
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
                <S.SignupIdDiv hasError={!!props.errors.username}>
                  <label htmlFor="username">이름</label>
                  <input
                    id="username"
                    type="text"
                    {...props.register("username", {
                      required: "이름은 필수 입력입니다.",
                    })}
                    placeholder="이름을 입력헤주세요"
                  />
                </S.SignupIdDiv>

                <S.DuplicateIdCheck hasError={!!props.errors.id}>
                  <label htmlFor="id">아이디</label>
                  <S.IdDuplicateCheckDiv>
                    <input
                      id="id"
                      type="text"
                      {...props.register("id", {
                        required: "아이디는 필수 입력입니다.",
                      })}
                      placeholder="아이디를 입력헤주세요"
                    />
                    <button onClick={props.onClickDuplicateId} type="button">
                      중복 확인
                    </button>
                  </S.IdDuplicateCheckDiv>
                  {props.checkId && (
                    <S.CheckIdMessage checkIdResult={props.checkIdResult}>
                      {props.checkIdResult
                        ? "사용 가능한 아이디 입니다"
                        : "이미 사용중인 아이디 입니다"}
                    </S.CheckIdMessage>
                  )}
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
                </S.SignupIdDiv>
              </>
            )}

            {props.step === 2 && (
              <div>
                <S.DuplicateIdCheck hasError={!!props.errors.email}>
                  <label htmlFor="id">이메일</label>
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

                  {props.checkEmail && (
                    <S.CheckIdMessage checkIdResult={props.checkEmailResult}>
                      {props.checkEmailResult
                        ? "사용 가능한 이메일 입니다"
                        : "이미 사용중인 이메일 입니다"}
                    </S.CheckIdMessage>
                  )}
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
                    <S.AddressButton type="button">검색</S.AddressButton>
                  </S.IdDuplicateCheckDiv>

                  {props.checkEmail && (
                    <S.CheckIdMessage checkIdResult={props.checkEmailResult}>
                      {props.checkEmailResult
                        ? "사용 가능한 이메일 입니다"
                        : "이미 사용중인 이메일 입니다"}
                    </S.CheckIdMessage>
                  )}
                </S.DuplicateIdCheck>
                <S.SignupIdDiv hasError={!!props.errors.username}>
                  <label htmlFor="username">상세주소</label>
                  <input
                    id="addressDetail"
                    type="text"
                    {...props.register("addressDetail", {
                      required: "상세주소는 필수 입력입니다.",
                    })}
                  />
                </S.SignupIdDiv>
              </div>
            )}

            {props.step === 3 && (
              <div>
                <S.SignupIdDiv>
                  <label htmlFor="terms">약관 동의</label>
                  <input
                    id="terms"
                    type="checkbox"
                    {...props.register("terms", {
                      required: "약관 동의는 필수입니다.",
                    })}
                  />
                  <label htmlFor="terms">약관에 동의합니다</label>
                </S.SignupIdDiv>
              </div>
            )}
            {props.errorMessage && (
              <S.ErrorMessage>
                <S.ErrorIcon />
                <span>{props.errorMessage}</span>
              </S.ErrorMessage>
            )}
            <S.SubmitBtnDiv step={props.step}>
              {console.log(props.step)}
              {props.step >= 2 && (
                <S.prevStepDiv
                  onClick={() => props.setStep((prev) => (prev -= 1))}
                >
                  <S.prevStepIcon />
                  <S.prevStep>이전</S.prevStep>
                </S.prevStepDiv>
              )}
              <S.SubmitDiv
                onClick={props.handleNextClick}
                disabled={!props.isValid || props.isSubmitting}
                isValid={props.isValid}
                type="button"
              >
                <span>{props.step === 3 ? "회원가입" : "다음으로"}</span>
                <S.NextIcon />
              </S.SubmitDiv>
            </S.SubmitBtnDiv>
          </S.SignupForm>
        </S.SignupBody>
      </S.SignupDiv>
    </>
  );
};

export default SignupUIPage;

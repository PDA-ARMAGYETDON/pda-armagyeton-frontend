import HeaderPage from "../../../components/header/header";
import * as S from "./Account.style";

const AccountUIPage = (props) => {
  return (
    <>
      <HeaderPage></HeaderPage>
      <S.AccountSection>
        <div>
          <S.BigText>
            나의 <S.ColorSpan>증권 종합 계좌 개설</S.ColorSpan>하기
          </S.BigText>
          <S.SmallText style={{ marginBottom: "10px" }}>
            주식과 금융상품을 한 계좌에서 거래할 수 있으며,
          </S.SmallText>
          <S.SmallText>
            국내/해외주식, 선물옵션, 금융상품(펀드, 채권, 연금, ELS, 외화RP),
            K-OTC, KONEX, 금현물 서비스를 이용할 수 있습니다.
          </S.SmallText>
        </div>
        <S.FormDiv>
          <S.SignupForm onSubmit={props.handleSubmit(props.onSubmit)}>
            <span style={{ marginBottom: "20px", fontWeight: "600" }}>
              기본 정보 입력
            </span>
            <S.SignupNameDiv hasError={!!props.errors.username}>
              <label htmlFor="name">이름</label>
              <input
                id="name"
                type="text"
                {...props.register("name", {
                  required: "이름 필수 입력입니다.",
                })}
                placeholder="이름을 입력헤주세요"
              />
              {props.errors.name && (
                <S.ErrorMessage>
                  <S.ErrorIcon />
                  <span>{props.errors.name.message}</span>
                </S.ErrorMessage>
              )}
            </S.SignupNameDiv>

            <S.SignupNameDiv hasError={!!props.errors.accountPInfo}>
              <label htmlFor="accountPInfo">계좌 비밀번호</label>
              <input
                id="accountPInfo"
                type="accountPInfo"
                {...props.register("accountPInfo", {
                  required: "계좌 비밀번호는 필수 입력입니다.",
                })}
                placeholder="계좌 비밀번호를 입력헤주세요"
              />
              {props.errors.accountPInfo && (
                <S.ErrorMessage>
                  <S.ErrorIcon />
                  <span>{props.errors.accountPInfo.message}</span>
                </S.ErrorMessage>
              )}
            </S.SignupNameDiv>

            <S.SubmitBtnDiv>
              <S.SubmitBtn type="submit" isValid={props.isValid}>
                계좌 개설하기
              </S.SubmitBtn>
            </S.SubmitBtnDiv>
            {console.log(props.agreeCheck)}
            <S.AgreeDiv>
              <S.AgreeLeftDiv onClick={props.onClickCheckAgree}>
                <S.CheckIcon isCheck={props.agreeCheck} />
                <span style={{ color: props.errorAgree ? "red" : "" }}>
                  개인(신용)정보 처리 동의서(금융거래)
                </span>
              </S.AgreeLeftDiv>
              <S.ArrowIcon />
            </S.AgreeDiv>
          </S.SignupForm>
        </S.FormDiv>
      </S.AccountSection>
    </>
  );
};

export default AccountUIPage;

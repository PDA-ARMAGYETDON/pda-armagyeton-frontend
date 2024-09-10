import HeaderPage from "../../../components/header/header";
import * as S from "./Account.personal.style";

const AccountPersonalSuccessUIPage = (props) => {
  return (
    <>
      <HeaderPage></HeaderPage>
      <S.AccountSection>
        <div>
          <S.BigText>
            나의 <S.ColorSpan>증권 개인 계좌</S.ColorSpan>가<br />
            개설되었습니다!
          </S.BigText>
          <S.SmallText>이제 나의 모임을 생성 할 수 있어요</S.SmallText>
        </div>
        <S.AccountItemDiv>
          <img src="/images/account.png" />
          <S.CompleteBtn onClick={props.onClickMoveToHome}>로그인하러 가기</S.CompleteBtn>
        </S.AccountItemDiv>
      </S.AccountSection>
    </>
  );
};

export default AccountPersonalSuccessUIPage;

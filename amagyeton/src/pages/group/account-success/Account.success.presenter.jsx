import HeaderPage from "../../../components/header/header";
import * as S from "./Account.style";

const AccountSuccessUIPage = (props) => {
  return (
    <>
      <HeaderPage></HeaderPage>
      <S.AccountSection>
        <div>
          <S.BigText>
            내 모임의 <S.ColorSpan>증권 종합 계좌</S.ColorSpan>가<br />
            개설되었습니다!
          </S.BigText>
          <S.SmallText>
            이제 모임탭에서 나의 모임을 확인할 수 있습니다.
          </S.SmallText>
        </div>
        <S.AccountItemDiv>
          <img src="/images/account.png" />
          <S.CompleteBtn onClick={props.onClickMoveToHome}>확인</S.CompleteBtn>
        </S.AccountItemDiv>
      </S.AccountSection>
    </>
  );
};

export default AccountSuccessUIPage;

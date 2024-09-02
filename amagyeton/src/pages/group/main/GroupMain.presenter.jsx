import FooterNav from "../../../components/footer-nav/FooterNav";
import HeaderGroupPage from "../../../components/header-group/header-group";

import * as S from "./GroupMain.style";

const GroupMainUIPage = () => {
  const ACCOUNT = "02-3827-4882-33 ";
  return (
    <>
      <HeaderGroupPage />
      <S.InfoSection>
        <S.AccountDiv>
          <span>{`계좌번호 : ${ACCOUNT}`}</span>
        </S.AccountDiv>
        <S.ChartDiv></S.ChartDiv>
        <S.RoleDiv>
          <button>모임원칙</button>
          <button>규칙제안</button>
          <button>매매제안</button>
        </S.RoleDiv>
        <S.ChartDiv></S.ChartDiv>
      </S.InfoSection>
      <FooterNav />
    </>
  );
};

export default GroupMainUIPage;

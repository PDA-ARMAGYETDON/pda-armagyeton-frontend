import FooterNav from "../../../../components/footer-nav/FooterNav";
import HeaderGroupPage from "../../../../components/header-group/header-group";
import { formatCurrency } from "../../../../lib/utils/formatCurrency";
import DonutChart from "./DonutChart";

import * as S from "./GroupMain.style";

const GroupMainUIPage = (props) => {
  const ACCOUNT = "02-3827-4882-33 ";
  return (
    <>
      <HeaderGroupPage />
      <S.InfoSection>
        <S.AccountDiv>
          <span>{`계좌번호 : ${ACCOUNT}`}</span>
        </S.AccountDiv>
        <S.ChartDiv>
          <DonutChart />
        </S.ChartDiv>
        <S.RoleDiv>
          <button onClick={props.onClickGroupRole} type="button">
            모임원칙
          </button>
          <button onClick={props.onClickruleProposal} type="button">
            규칙제안
          </button>
          <button onClick={props.onClickSaleProposal} type="button">
            매매제안
          </button>
        </S.RoleDiv>
        <S.PortfolioInfoDiv>
          <S.PortfolioInfoItem>
            <label>매수가격</label>
            <span>{formatCurrency(300000000)}원</span>
          </S.PortfolioInfoItem>
          <S.PortfolioRateDiv>
            <label>평가금액</label>
            <S.RateDiv>
              <span>{formatCurrency(43342222)}원</span>
              <span>{`-${formatCurrency(43342222)}원(+32.6%)`}</span>
            </S.RateDiv>
          </S.PortfolioRateDiv>
          <S.PortfolioInfoItem>
            <label>예수금</label>
            <span>{formatCurrency(1000000)}원</span>
          </S.PortfolioInfoItem>
          <S.PortfolioInfoItem>
            <label>총자산</label>
            <span>{formatCurrency(102023220)}원</span>
          </S.PortfolioInfoItem>

          <S.TransactionDiv style={{ marginTop: "10px" }}>
            <div>
              <span>주식거래내역</span>
              <S.ArrowIcon />
            </div>
            <div></div>
          </S.TransactionDiv>
          <S.TransactionDiv>
            <div>
              <span>이체내역</span>
              <S.ArrowIcon />
            </div>
            <div></div>
          </S.TransactionDiv>
        </S.PortfolioInfoDiv>
      </S.InfoSection>
      <FooterNav />
    </>
  );
};

export default GroupMainUIPage;

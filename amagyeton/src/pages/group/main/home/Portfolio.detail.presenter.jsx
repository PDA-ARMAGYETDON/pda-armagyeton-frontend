import HeaderAlarmPage from "../../../../components/header-alarm/header-alarm";
import FooterNav from "../../../../components/footer-nav/FooterNav";
import DonutChart from "./DonutChart";
import * as S from "./Portfolio.detail.style";

const PortfolioDetailUIPage = () => {
  return (
    <>
      <HeaderAlarmPage />
      <S.Section>
        <S.ChartDiv>
          <DonutChart />
        </S.ChartDiv>

        <S.StockItemDiv></S.StockItemDiv>
      </S.Section>
      <FooterNav />
    </>
  );
};

export default PortfolioDetailUIPage;

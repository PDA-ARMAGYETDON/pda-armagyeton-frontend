import HeaderStockPage from "../../../../components/header-stock/header-stock";
import { formatCurrency } from "../../../../lib/utils/formatCurrency";
import LabTabs from "./LabTabs";
import FooterNav from "../../../../components/footer-nav/FooterNav";
import * as S from "./Stock.style";

const StockUIPage = (props) => {
  console.log(props.stockData[4]);
  return (
    <>
      <HeaderStockPage />
      <S.StockSection>
        {props.stockData[0] !== undefined ? (
          <S.StockPriceDiv>
            <S.StockNamePrice>{props.stockData[0]}</S.StockNamePrice>
            <S.StockNamePrice>
              {formatCurrency(props.stockData[2])}원
            </S.StockNamePrice>
            {String(props.stockData[3]).split("")[0] === "-" ? (
              <S.StockRate
                isCheck={String(props.stockData[3]).split("")[0] === "-"}
              >{`어제보다 ${formatCurrency(props.stockData[3])}(${
                props.stockData[4]
              })원`}</S.StockRate>
            ) : (
              <S.StockRate
                isCheck={String(props.stockData[3]).split("")[0] === "-"}
              >{`어제보다 ${formatCurrency(props.stockData[3])}(${
                props.stockData[4]
              })`}</S.StockRate>
            )}
          </S.StockPriceDiv>
        ) : (
          <S.StockPriceDiv></S.StockPriceDiv>
        )}

        <S.StockItemDiv>
          <LabTabs />
        </S.StockItemDiv>
        <S.ProposalDiv>
          <button>매도 제안</button>
          <button>매수 제안</button>
        </S.ProposalDiv>
      </S.StockSection>
      <FooterNav />
    </>
  );
};

export default StockUIPage;

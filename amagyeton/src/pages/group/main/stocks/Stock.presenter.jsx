import HeaderStockPage from "../../../../components/header-stock/header-stock";
import { formatCurrency } from "../../../../lib/utils/formatCurrency";
import BasicTabs from "./LabTabs";
import FooterNav from "../../../../components/footer-nav/FooterNav";
import * as S from "./Stock.style";
import StockSaleModal from "./StockSaleModal";
import StockBuyModal from "./StockBuyModal";
import { useState } from "react";

const StockUIPage = (props) => {
  console.log(props.stockData);
  const [isSaleOpen, setIsSaleOpen] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);

  const onClickSale = () => {
    setIsSaleOpen(true);
  };
  const onClickBuy = () => {
    setIsBuyOpen(true);
  };

  const handleSaleClose = () => {
    setIsSaleOpen(false);
  };

  const handleBuyClose = () => {
    setIsBuyOpen(false);
  };

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
          <BasicTabs chartData={props.chartData} />
        </S.StockItemDiv>
        <S.ProposalDiv>
          <button onClick={onClickSale}>매도 제안</button>
          <button onClick={onClickBuy}>매수 제안</button>
        </S.ProposalDiv>
      </S.StockSection>
      <FooterNav />
      {isBuyOpen && (
        <StockBuyModal isOpen={isBuyOpen} onClose={handleBuyClose} />
      )}
      {isSaleOpen && (
        <StockSaleModal isOpen={isSaleOpen} onClose={handleSaleClose} />
      )}
    </>
  );
};

export default StockUIPage;

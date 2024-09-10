import { useEffect, useState } from "react";
import AppViewColorPage from "../../../../components/app-view/AppViewColor";
import { useNavigate, useParams } from "react-router-dom";
import { EventSourcePolyfill } from "event-source-polyfill";
import { formatCurrency } from "../../../../lib/utils/formatCurrency";
import * as S from "./GroupMain.style";
import DonutChart from "./DonutChart";
import HeaderGroupPage from "../../../../components/header-group/header-group";
import FooterNav from "../../../../components/footer-nav/FooterNav";
import { PortfoiloStockData } from "../../../../lib/apis/apis";
const AG_GATEWAY_URL = import.meta.env.VITE_AG_GATEWAY_URL;
const GroupMainPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState({});
  const [hasStock, setHasStock] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");

    const eventSource = new EventSourcePolyfill(
      `${AG_GATEWAY_URL}/api/accounts/sum-realtime/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessage(newMessage);
    };

    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await PortfoiloStockData();
      if (res.data === null) {
        setHasStock(false);
      }
    };
    fetchData();
  }, [id]);

  // Navigation handlers
  const onClickGroupRole = () => {
    navigate(`/group/${id}/groupRole`);
  };

  const onClickruleProposal = () => {
    console.log("click");
    navigate(`/group/${id}/roleSuggest`);
  };

  const onClickSaleProposal = () => {
    console.log("Clicked Sale Proposal");
  };

  console.log(message);

  const onClickTradeData = () => {
    navigate(`/group/${id}/tradeData`);
  };

  const onClickTransferList = () => {
    navigate(`/group/${id}/transferList`);
  };

  return (
    <AppViewColorPage>
      <>
        <HeaderGroupPage />
        <S.InfoSection>
          <S.AccountDiv>
            <span>{`계좌번호 : ${message?.accountNumber || "N/A"}`}</span>
          </S.AccountDiv>
          {hasStock ? (
            <S.ChartDiv
              onClick={() => navigate(`/group/${id}/detail`)}
              style={{ cursor: "pointer" }}
            >
              <DonutChart />
            </S.ChartDiv>
          ) : (
            <S.NonChartDiv>
              <S.NonIcon />
              <div>현재 보유한 주식이 없어요</div>
            </S.NonChartDiv>
          )}

          <S.RoleDiv>
            <button onClick={onClickGroupRole}>모임원칙</button>
            <button onClick={onClickruleProposal}>규칙제안</button>
            <button onClick={onClickSaleProposal}>매매제안</button>
          </S.RoleDiv>
          <S.PortfolioInfoDiv>
            <S.PortfolioInfoItem>
              <label>매수가격</label>
              <span>{formatCurrency(message?.totalPchsAmt) || "0"}원</span>
            </S.PortfolioInfoItem>
            <S.PortfolioRateDiv>
              <label>평가금액</label>
              <S.RateDiv>
                <span>{formatCurrency(message?.totalEvluAmt) || "0"}원</span>
                <span>{`${formatCurrency(message?.totalEvluPfls) || "0"}원(${
                  message?.totalEvluPflsRt
                }%)`}</span>
              </S.RateDiv>
            </S.PortfolioRateDiv>
            <S.PortfolioInfoItem>
              <label>예수금</label>
              <span>{formatCurrency(message?.deposit) || "0"}원</span>
            </S.PortfolioInfoItem>
            <S.PortfolioInfoItem>
              <label>총자산</label>
              <span>{formatCurrency(message?.totalAsset) || "0"}원</span>
            </S.PortfolioInfoItem>

            <S.TransactionDiv style={{ marginTop: "10px" }}>
              <S.HistoryDiv onClick={onClickTradeData}>
                <span>주식거래내역</span>
                <S.ArrowIcon />
              </S.HistoryDiv>
              <div></div>
            </S.TransactionDiv>
            <S.TransactionDiv>
              <S.HistoryDiv onClick={onClickTransferList}>
                <span>이체내역</span>
                <S.ArrowIcon />
              </S.HistoryDiv>
              <div></div>
            </S.TransactionDiv>
          </S.PortfolioInfoDiv>
        </S.InfoSection>
        <FooterNav />
      </>
    </AppViewColorPage>
  );
};

export default GroupMainPage;

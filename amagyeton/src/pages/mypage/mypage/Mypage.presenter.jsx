import * as S from "./Mypage.style";
import { useState, useEffect, useCallback, useRef } from "react";
import HeaderMyPage from "../../../components/header-mypage/header-mypage";
import FooterNav from "../../../components/footer-nav/FooterNav";
import { formatCurrency } from "../../../lib/utils/formatCurrency";
import {
  GetPersonalAccount,
  GetPersonalTransferHistory,
} from "../../../lib/apis/apis";

const MyPageUIPage = () => {
  const [accountNumber, setAccountNumber] = useState("8190100000000");
  const [totalAsset, setTotalAsset] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [page, setPage] = useState(0); // 현재 페이지 번호 상태
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 여부
  const observerRef = useRef(); // Intersection Observer 참조

  // API 호출 함수
  const fetchData = useCallback(async () => {
    try {
      const res = await GetPersonalTransferHistory(page, 10);
      const data = res.data.content;

      if (data.length == 0) {
        setHasMore(false);
      }

      const groupedData = groupByDate(data);
      setTransactionHistory((prevHistory) => [...prevHistory, ...groupedData]);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const lastDataElementRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect(); // 기존 Observer 연결 해제
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
        }
      });
      if (node) observerRef.current.observe(node); // 새로운 노드 관찰
    },
    [hasMore]
  );

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const response = await GetPersonalAccount();
        const data = response.data;
        setAccountNumber(formatAccountNumber(data.accountNumber)); // 계좌번호 포맷
        setTotalAsset(data.totalAsset);
      } catch (error) {
        console.error("Error fetching account info:", error);
      }
    };

    fetchAccountInfo();
  }, [page]);

  const groupByDate = (data) => {
    const grouped = data.reduce((acc, item) => {
      const dateObj = new Date(
        item.transferDate[0],
        item.transferDate[1] - 1,
        item.transferDate[2],
        item.transferDate[3],
        item.transferDate[4],
        item.transferDate[5]
      );

      const dateKey = dateObj.toLocaleDateString("ko-KR", {
        month: "numeric",
        day: "numeric",
        weekday: "long",
      });

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push({
        name: item.name || "알 수 없는 거래처",
        price: `${formatCurrency(item.transferAmt)}원`,
      });

      return acc;
    }, {});

    return Object.keys(grouped).map((date) => ({
      date,
      info: grouped[date],
    }));
  };

  const formatAccountNumber = (accountNumber) => {
    return accountNumber.replace(/^(\d{3})(\d{2})(\d{6})$/, "$1-$2-$3");
  };

  return (
    <>
      <HeaderMyPage />
      <S.Section>
        <S.ItemDiv>
          <S.AccountInfo>
            <S.AccountInfoDetail>
              <span>SOLSOL한 보통 예금 계좌</span>
              <span>{accountNumber}</span>
            </S.AccountInfoDetail>
            <S.AccountInfoPrice>
              <span>{`${formatCurrency(totalAsset)}원`}</span>
            </S.AccountInfoPrice>
          </S.AccountInfo>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.Title>거래 내역</S.Title>
          {transactionHistory.length > 0 ? (
            <S.Transaction>
              {transactionHistory.map((e, i) => {
                const isLastElement = i === transactionHistory.length - 1;
                return (
                  <div
                    key={i}
                    style={{ marginBottom: "30px" }}
                    ref={isLastElement ? lastDataElementRef : null}
                  >
                    <S.TransactionDate>{e.date}</S.TransactionDate>
                    {e.info.map((infoItem, j) => (
                      <S.TransactionDetail
                        key={j}
                        isNegative={
                          parseInt(infoItem.price.replace(/,/g, "")) < 0
                        }
                      >
                        <span>{infoItem.name}</span>
                        <span>{infoItem.price}</span>
                      </S.TransactionDetail>
                    ))}
                  </div>
                );
              })}
            </S.Transaction>
          ) : (
            <S.Transaction>
              <S.NonChartDiv>
                <S.NonIcon />
                <div>이체 내역이 없어요</div>
              </S.NonChartDiv>
            </S.Transaction>
          )}
        </S.ItemDiv>
      </S.Section>
      <FooterNav />
    </>
  );
};

export default MyPageUIPage;

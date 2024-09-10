import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./TradeData.style";
import { TradeData } from "../../../../../lib/apis/apis";
import AppViewColorPage from "../../../../../components/app-view/AppViewColor";
import HeaderGroupPage from "../../../../../components/header-group/header-group";
import { formatCurrency } from "../../../../../lib/utils/formatCurrency";

const TradeDataPage = () => {
  const [data, setData] = useState([]); // 거래 데이터 배열 상태
  const [page, setPage] = useState(0); // 현재 페이지 번호 상태
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 여부
  const [groupedData, setGroupedData] = useState({}); // 요일별로 그룹화된 데이터 상태
  const observerRef = useRef(); // Intersection Observer 참조

  // API 호출 함수
  const fetchData = useCallback(async () => {
    try {
      const res = await TradeData(page, 10);
      console.log(res);
      if (res.data.length === 0) {
        setHasMore(false); // 더 이상 데이터가 없을 경우
      } else {
        setData((prevData) => [...prevData, ...res.data]); // 기존 데이터에 추가
      }
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    // 거래 데이터를 요일별로 그룹화
    const groupByDay = (data) => {
      const grouped = data.reduce((acc, trade) => {
        const date = new Date(trade.tradeDate);
        const formattedDate = formatDay(date);
        if (!acc[formattedDate]) acc[formattedDate] = [];
        acc[formattedDate].push(trade);
        return acc;
      }, {});
      return grouped;
    };

    const grouped = groupByDay(data);
    setGroupedData(grouped);
  }, [data]);

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

  const formatDay = (date) => {
    const days = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = days[date.getDay()];
    return `${month}.${day} ${weekday}`;
  };

  console.log(data);
  return (
    <AppViewColorPage>
      <HeaderGroupPage />
      <S.Section>
        <S.Title>전체 거래 내역 조회</S.Title>
        {console.log(groupedData)}
        {Object.keys(groupedData).length > 0 ? (
          <S.TradeListDiv>
            {Object.keys(groupedData).map((formattedDate) => (
              <div key={formattedDate}>
                <S.DateDiv>{formattedDate}</S.DateDiv>
                {groupedData[formattedDate].map((trade, index) => (
                  <S.TradeItem
                    key={index}
                    ref={
                      index === groupedData[formattedDate].length - 1
                        ? lastDataElementRef
                        : null
                    }
                  >
                    <S.ItemDiv>
                      <S.ItemLeft>{trade?.stockName}</S.ItemLeft>
                      <S.ItemLRight isCheck={trade?.type === "BUY"}>
                        <div>{`${trade?.quantity}주 ${
                          trade?.type === "BUY" ? "구매" : "판매"
                        } (주당 ${formatCurrency(trade?.price)}원) `}</div>
                      </S.ItemLRight>
                    </S.ItemDiv>
                  </S.TradeItem>
                ))}
              </div>
            ))}
          </S.TradeListDiv>
        ) : (
          <S.TradeListDiv>
            <S.NonChartDiv>
              <S.NonIcon />
              <div>거래된 내역이 없어요</div>
            </S.NonChartDiv>
          </S.TradeListDiv>
        )}
      </S.Section>
    </AppViewColorPage>
  );
};

export default TradeDataPage;

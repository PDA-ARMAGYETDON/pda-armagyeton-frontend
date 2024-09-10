import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./TransferList.style";
import { TransferData } from "../../../../../lib/apis/apis";
import AppViewColorPage from "../../../../../components/app-view/AppViewColor";
import HeaderGroupPage from "../../../../../components/header-group/header-group";
import { formatCurrency } from "../../../../../lib/utils/formatCurrency"; // 포맷 함수 필요시

const TransferListPage = () => {
  const [data, setData] = useState([]); // 이체 데이터 배열 상태
  const [page, setPage] = useState(0); // 현재 페이지 번호 상태
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 여부
  const [groupedData, setGroupedData] = useState({}); // 요일별로 그룹화된 데이터 상태
  const observerRef = useRef(); // Intersection Observer 참조

  // API 호출 함수
  const fetchData = useCallback(async () => {
    try {
      const res = await TransferData(page, 10);
      console.log(res);
      if (res.data.content.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...res.data.content]); // 기존 데이터에 추가
      }
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const groupByDay = (data) => {
      const grouped = data.reduce((acc, transfer) => {
        const [year, month, day, hour, minute, second] = transfer.transferDate;
        const date = new Date(year, month - 1, day, hour, minute, second);
        const formattedDate = formatDay(date);
        if (!acc[formattedDate]) acc[formattedDate] = [];
        acc[formattedDate].push(transfer);
        return acc;
      }, {});
      return grouped;
    };

    const grouped = groupByDay(data);
    setGroupedData(grouped);
  }, [data]);

  const lastDataElementRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observerRef.current.observe(node);
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

  return (
    <AppViewColorPage>
      <HeaderGroupPage />
      <S.Section>
        <S.Title>전체 이체 내역 조회</S.Title>
        {console.log(groupedData)}
        {Object.keys(groupedData).length > 0 ? (
          <S.TradeListDiv>
            {console.log(groupedData)}
            {Object.keys(groupedData).map((formattedDate) => (
              <div key={formattedDate} style={{ marginBottom: "20px" }}>
                <S.DateDiv>{formattedDate}</S.DateDiv>
                {groupedData[formattedDate].map((transfer, index) => (
                  <S.TradeItem
                    key={index}
                    ref={
                      index === groupedData[formattedDate].length - 1
                        ? lastDataElementRef
                        : null
                    }
                  >
                    <div>{transfer.name}</div>
                    <div>{`${formatCurrency(transfer.transferAmt)}원`}</div>
                  </S.TradeItem>
                ))}
              </div>
            ))}
          </S.TradeListDiv>
        ) : (
          <S.TradeListDiv>
            <S.NonChartDiv>
              <S.NonIcon />
              <div>이체된 내역이 없어요</div>
            </S.NonChartDiv>
          </S.TradeListDiv>
        )}
      </S.Section>
    </AppViewColorPage>
  );
};

export default TransferListPage;

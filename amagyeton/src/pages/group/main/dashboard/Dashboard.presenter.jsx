import HeaderGroupPage from "../../../../components/header-group/header-group";
import * as S from "./Dashboard.style";
import LineChart from "./StockChart";
import FooterNav from "../../../../components/footer-nav/FooterNav";
import { useState } from "react";

const DashboardUIPage = () => {
  const [selectedDate, setSelectedDate] = useState("1일");

  const handleDateChange = (date) => {
    setSelectedDate(date); // 선택된 날짜 업데이트
  };

  return (
    <>
      <HeaderGroupPage />
      <S.Section>
        <S.ItemDiv>
          <S.Title>국내 주요지수</S.Title>
          <S.MainRateDiv>
            <S.MainRateItem>
              <S.MainRateItemLeft>
                <div>
                  <span style={{ fontWeight: "bold" }}>코스피</span>
                  <span>2,679.54</span>
                </div>
                <S.StockRate>+54.04(2.0)%</S.StockRate>
              </S.MainRateItemLeft>
              <div>
                <LineChart />
              </div>
            </S.MainRateItem>
            <S.MainRateItem>
              <S.MainRateItemLeft>
                <div>
                  <span style={{ fontWeight: "bold" }}>코스피</span>
                  <span>2,679.54</span>
                </div>
                <S.StockRate>+54.04(2.0)%</S.StockRate>
              </S.MainRateItemLeft>
              <div>
                <LineChart />
              </div>
            </S.MainRateItem>
          </S.MainRateDiv>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.Title>오늘의 뉴스</S.Title>
          <S.TodayNews></S.TodayNews>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.Title>종목 순위</S.Title>
          <S.StockRank>
            <S.StockRankHeader>
              <S.RankType
                selected={selectedDate === "1일"}
                onClick={() => handleDateChange("1일")}
              >
                애널리스트 추천
              </S.RankType>
              <S.RankType
                selected={selectedDate === "1주일"}
                onClick={() => handleDateChange("1주일")}
              >
                시장 상위종목
              </S.RankType>
              <S.RankType
                selected={selectedDate === "1달"}
                onClick={() => handleDateChange("1달")}
              >
                인기종목
              </S.RankType>
            </S.StockRankHeader>
          </S.StockRank>
        </S.ItemDiv>
      </S.Section>
      <FooterNav />
    </>
  );
};

export default DashboardUIPage;

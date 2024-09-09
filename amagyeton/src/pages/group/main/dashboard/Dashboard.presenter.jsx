import HeaderGroupPage from "../../../../components/header-group/header-group";
import * as S from "./Dashboard.style";
import FooterNav from "../../../../components/footer-nav/FooterNav";
import { useEffect, useState } from "react";
import {
  getIssue,
  getKospiKosdac,
  getNews,
} from "../../../../lib/apis/dashboardApis";

const DashboardUIPage = () => {
  const [selectedRank, setSelectedRank] = useState("인기종목");

  const [kospiCurrentValue, setKospiCurrentValue] = useState(0);
  const [kospiChangeValue, setKospiChangeValue] = useState(0);
  const [kospiChangeRate, setKospiChangeRate] = useState(0);
  const [kosdacCurrentValue, setKosdacCurrentValue] = useState(0);
  const [kosdacChangeValue, setKosdacChangeValue] = useState(0);
  const [kosdacChangeRate, setKosdacChangeRate] = useState(0);

  const [news, setNews] = useState([]);
  const [rank, setRank] = useState({
    hotEarning: [],
    hotVolume: [],
    risingRanking: [],
  });

  const handleRankChange = (date) => {
    setSelectedRank(date); // 선택된 탭 업데이트
  };

  const renderData = () => {
    switch (selectedRank) {
      case "인기종목":
        return rank.hotEarning;
      case "거래량상위종목":
        return rank.hotVolume;
      case "수익률상위종목":
        return rank.risingRanking;
      default:
        return [];
    }
  };

  const fetchKospiData = async () => {
    await getKospiKosdac().then((data) => {
      setKospiCurrentValue(data.kospi.currentValue);
      setKospiChangeValue(data.kospi.changeValue);
      setKospiChangeRate(data.kospi.changeRate);
      setKosdacCurrentValue(data.kospi.currentValue);
      setKosdacChangeValue(data.kospi.changeValue);
      setKosdacChangeRate(data.kospi.changeRate);
    });
  };

  const fetchNews = async () => {
    await getNews().then((data) => {
      setNews(data);
    });
  };

  const fetchRank = async () => {
    await getIssue().then((data) => {
      console.log(data);
      setRank(data);
    });
  };

  useEffect(() => {
    fetchKospiData();
    fetchNews();
    fetchRank();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 해줍니다.
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const isToday = now.toDateString() === date.toDateString();
    const isYesterday =
      new Date(now.setDate(now.getDate() - 1)).toDateString() ===
      date.toDateString();

    if (isToday) {
      return `오늘 ${hours}:${minutes}`;
    } else if (isYesterday) {
      return `어제 ${hours}:${minutes}`;
    } else {
      return `${month}월 ${day}일 ${hours}:${minutes}`;
    }
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
                  <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                    코스피
                  </span>
                  <span style={{ fontWeight: "semibold", fontSize: "1.1rem" }}>
                    {kospiCurrentValue}
                  </span>
                  <S.StockRate>
                    {kospiChangeValue}({kospiChangeRate}%)
                  </S.StockRate>
                </div>
              </S.MainRateItemLeft>
              {/* <div>
                <LineChart />
              </div> */}
            </S.MainRateItem>
            <S.MainRateItem>
              <S.MainRateItemLeft>
                <div>
                  <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                    코스닥
                  </span>
                  <span style={{ fontWeight: "semibold", fontSize: "1.1rem" }}>
                    {kosdacCurrentValue}
                  </span>
                  <S.StockRate>
                    {kosdacChangeValue}({kosdacChangeRate}%)
                  </S.StockRate>
                </div>
              </S.MainRateItemLeft>
            </S.MainRateItem>
          </S.MainRateDiv>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.Title>오늘의 뉴스</S.Title>
          <S.TodayNews>
            {news.map((item, index) => (
              <div
                key={index}
                onClick={() => window.open(item.url, "_blank")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
                style={{
                  cursor: "pointer",
                  padding: "7px 10px",
                  transition: "box-shadow 0.3s ease",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>
                  {item.title}
                </span>
                <br />
                <span
                  style={{
                    color: "#4C4C4C",
                    marginTop: "3px",
                    fontSize: "0.8rem",
                  }}
                >
                  {item.press} · {formatDate(item.date)}
                </span>
              </div>
            ))}
          </S.TodayNews>
        </S.ItemDiv>
        <S.ItemDiv3>
          <S.Title>종목 순위</S.Title>
          <S.StockRank>
            <S.StockRankHeader>
              <S.RankType
                selected={selectedRank === "인기종목"}
                onClick={() => handleRankChange("인기종목")}
              >
                인기종목
              </S.RankType>
              <S.RankType
                selected={selectedRank === "거래량상위종목"}
                onClick={() => handleRankChange("거래량상위종목")}
              >
                거래량상위종목
              </S.RankType>
              <S.RankType
                selected={selectedRank === "수익률상위종목"}
                onClick={() => handleRankChange("수익률상위종목")}
              >
                수익률상위종목
              </S.RankType>
            </S.StockRankHeader>
            <S.StockRankBody>
              {renderData().map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    padding: "7px 10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <span style={{ flex: 1, color: "#4C4C4C" }}>{item.rank}</span>
                  <span style={{ flex: 13, fontWeight: "600" }}>
                    {item.stockName}
                  </span>
                </div>
              ))}
            </S.StockRankBody>
          </S.StockRank>
        </S.ItemDiv3>
      </S.Section>
      <FooterNav />
    </>
  );
};

export default DashboardUIPage;

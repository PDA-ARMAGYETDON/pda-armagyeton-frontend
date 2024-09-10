import { useNavigate, useParams } from "react-router-dom";
import HeaderStockSearchPage from "../../../../../components/header-stock-search/header-stock-search";
import * as S from "./Stock.search.style";

const StockSearchUIPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = [
    { name: "삼성전자", rate: -1.3, code: "005930" },
    { name: "네이버", rate: -1.3, code: "035420" },
    { name: "카카오", rate: +2.6, code: "035720" },
    { name: "sk하이닉스", rate: -1.3, code: "000660" },
    { name: "HLB", rate: 3.9, code: "028300" },
    { name: "LG에너지솔루션", rate: 1.2, code: "373220" },
    { name: "삼성바이오로직스", rate: -0.5, code: "207940" },
    { name: "현대차", rate: 0.8, code: "005380" },
    { name: "셀트리온", rate: -2.1, code: "068270" },
    { name: "기아", rate: 1.9, code: "000270" },
    { name: "KB금융", rate: -0.4, code: "105560" },
    { name: "신한지주", rate: 0.2, code: "055550" },
  ];

  // 종목 클릭 시 해당 종목 코드로 URL 변경 함수
  const handleStockClick = (code) => {
    console.log(code);
    navigate(`/group/${id}/stocks/${code}`);
  };

  return (
    <>
      <HeaderStockSearchPage />
      <S.Section>
        <S.Title>
          <span>인기주식</span>
          <span>오늘 13:10 기준</span>
        </S.Title>
        <div style={{ width: "100%", marginTop: "30px" }}>
          {data.map((e, i) => {
            return (
              <S.RankList key={i} onClick={() => handleStockClick(e.code)}>
                <S.RankListLeft>
                  <span style={{ color: "black" }}>{i + 1}</span>
                  <span style={{ cursor: "pointer", color: "black" }}>
                    {e.name}
                  </span>
                </S.RankListLeft>
                <S.RankListRight isCheck={e.rate < 0}>
                  {e.rate}%
                </S.RankListRight>
              </S.RankList>
            );
          })}
        </div>
      </S.Section>
    </>
  );
};

export default StockSearchUIPage;

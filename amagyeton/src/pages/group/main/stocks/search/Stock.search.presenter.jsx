import HeaderStockSearchPage from "../../../../../components/header-stock-search/header-stock-search";
import * as S from "./Stock.search.style";

const StockSearchUIPage = () => {
  const data = [
    {
      name: "삼성전자",
      rate: -1.3,
    },
    {
      name: "네이버",
      rate: -1.3,
    },
    {
      name: "카카오",
      rate: +2.6,
    },
    {
      name: "sk하이닉스",
      rate: -1.3,
    },
    {
      name: "HLB",
      rate: 3.9,
    },
  ];
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
              <S.RankList key={i}>
                <S.RankListLeft>
                  <span>{i + 1}</span>
                  <span>{e.name}</span>
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

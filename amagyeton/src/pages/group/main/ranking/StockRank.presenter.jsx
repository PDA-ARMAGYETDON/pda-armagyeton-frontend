import FooterNav from "../../../../components/footer-nav/FooterNav";
import HeaderGroupPage from "../../../../components/header-group/header-group";
import * as S from "./StockRank.style";

const StockRankUIPage = (props) => {
  const topRank = [];
  for (let i = 0; i <= 2; i++) {
    topRank.push(props.data[i]);
  }
  console.log(topRank);
  return (
    <>
      <HeaderGroupPage />
      <S.Section>
        <S.TopRank>
          <img src="/images/rank.png" />
          <S.SecondRank>
            <span>{topRank[0].name}</span>
            <img src="" />
          </S.SecondRank>
          <S.FirstRank>
            <S.SecondRank>
              <span>{topRank[1].name}</span>
              <S.GroupIcon1 />
            </S.SecondRank>
          </S.FirstRank>
          <S.ThirdRank>
            <S.SecondRank>
              <span>{topRank[2].name}</span>
              <S.GroupIcon3 />
            </S.SecondRank>
          </S.ThirdRank>
        </S.TopRank>
        <S.RankListDiv>
          {props.data.map((e, i) => {
            return (
              <S.RankListItem key={i}>
                <span>{e.rank}등</span>
                <span>{e.name}</span>
                <span>{e.type}</span>
                <span>{e.rate}</span>
              </S.RankListItem>
            );
          })}
        </S.RankListDiv>
      </S.Section>
      <FooterNav />
    </>
  );
};

export default StockRankUIPage;

import FooterNav from "../../../../components/footer-nav/FooterNav";
import HeaderGroupPage from "../../../../components/header-group/header-group";
import * as S from "./StockRank.style";

const StockRankUIPage = (props) => {
  const topRank = [];
  console.log(props.data);
  if (props.data.rankings && props.data.rankings.length > 0) {
    // rankings 배열의 길이가 3보다 작아도 그 길이만큼만 반복
    for (let i = 0; i < Math.min(3, props.data.rankings.length); i++) {
      if (props.data.rankings[i]) { // 배열에 해당 인덱스 값이 있는지 확인
        console.log("값이 있음")
        console.log(props.data.rankings[i]);
        topRank.push(props.data.rankings[i]);
      }
    }
  }
  return (
    <>
      <HeaderGroupPage />
      {/* 여기 탭 UI 추가 */}
      <S.TabContainer>
        <S.Tab onClick={() => props.handleSeedMoneyChange(1000000)}>~100만원</S.Tab>
        <S.Tab onClick={() => props.handleSeedMoneyChange(10000000)}>~1,000만원</S.Tab>
        <S.Tab onClick={() => props.handleSeedMoneyChange(50000000)}>~5,000만원</S.Tab>
      </S.TabContainer>
      <S.Section>
      <S.TopRank>
        <img src="/images/rankgroup.png" />
        
        {/* 두 번째 랭킹 표시 */}
        {topRank[1] && (
          <S.SecondRank>
            <span>{topRank[1].name || "이름 없음"}</span>
            <S.GroupIcon2 />
          </S.SecondRank>
        )}

        {/* 첫 번째 랭킹 표시 */}
        {topRank[0] && (
          <S.FirstRank>
              <span>{topRank[0].name || "이름 없음"}</span>
              <S.GroupIcon1 />
          </S.FirstRank>
        )}

        {/* 세 번째 랭킹 표시 */}
        {topRank[2] && (
          <S.ThirdRank>
              <span>{topRank[2].name || "이름 없음"}</span>
              <S.GroupIcon3 />
          </S.ThirdRank>
        )}
      </S.TopRank>

      {/* 그외 랭킹 표시 */}
      <S.RankListDiv>
        {props.data.rankings && props.data.rankings.length > 0 ? (
          props.data.rankings.slice(3).map((e, i) => {
            const rankIndex = i + 4; // 현재 등수: 4등부터 시작
            const isTeamRank = rankIndex === props.data.teamRanking; // 팀의 등수인지 확인
            return (
              <S.RankListItem 
                key={i} 
                style={{
                  backgroundColor: isTeamRank ? "#f0f8ff" : "transparent", // 팀의 등수일 경우 배경색 변경
                  color: isTeamRank ? "#000" : "inherit", 
                  padding: "2px 6px",
                  margin: "5px 0", 
                  borderRadius: "8px" 

                }}
              >
                <span>{rankIndex}등</span>
                <span>{e.name || "이름 없음"}</span>
                <span>{e.category || "없음"}</span>
                <span>{e.evluPflsRt !== null ? e.evluPflsRt + "%" : "0%"}</span>
              </S.RankListItem>
            );
          })
        ) : (
          <p>랭킹이 없습니다.</p> 
        )}
      </S.RankListDiv>  
      </S.Section>
      <FooterNav />
    </>
  );
};

export default StockRankUIPage;

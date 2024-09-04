import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const ItemDiv = styled.div`
  margin-bottom: 30px;
`;
export const MainRateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainRateItem = styled.div`
  width: 48%;
  height: 100%;
  aspect-ratio: 4/2.3;
  background-color: white;
  border-radius: 30px;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const MainRateItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;

  & div:nth-child(1) {
    display: flex;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

export const StockRate = styled.span`
  font-size: 0.7rem;
  color: #f81225;
`;

export const TodayNews = styled.div`
  width: 100%;
  aspect-ratio: 4/2.5;
  background-color: white;
  border-radius: 30px;
`;

export const StockRank = styled.div`
  width: 100%;
  aspect-ratio: 4/2.5;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
`;

export const StockRankHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px; /* 상단에 여백 추가 */
`;

export const RankType = styled.div`
  width: 32%;
  padding: 6px;
  background-color: ${(props) =>
    props.selected ? "rgb(72 154 218)" : "white"};
  color: ${(props) => (props.selected ? "white" : "rgba(0, 0, 0, 0.5)")};
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 애니메이션 추가 */
`;

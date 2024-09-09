import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.label`
  font-size: 1.3rem;
  font-weight: 1000;
  margin-bottom: 15px;
`;

export const ItemDiv = styled.div`
  margin-bottom: 30px;
`;

export const ItemDiv3 = styled.div`
  margin-bottom: 80px;
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
  padding: 0px 0px 0px 25px;
  display: flex;
  justify-content: flex-start;
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
  align-items: flex-start; 

  & div:nth-child(1) {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

export const StockRate = styled.span`
  padding-top: 5px;
  font-size: 1rem;
  color: #f81225;
`;

export const TodayNews = styled.div`
  width: 100%;
  aspect-ratio: 4/2.5;
  background-color: white;
  border-radius: 20px;
  padding: 17px 21px 17px 20px;
`;

export const StockRank = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;

export const StockRankHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StockRankBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px 5px 0 5px;
`;

export const RankType = styled.div`
  width: auto;
  padding: 6px 20px;
  background-color: ${(props) =>
    props.selected ? "#1C77FF" : "white"};
  color: ${(props) => (props.selected ? "white" : "#1C77FF")};
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 애니메이션 추가 */
  font-weight: 1000;
`;

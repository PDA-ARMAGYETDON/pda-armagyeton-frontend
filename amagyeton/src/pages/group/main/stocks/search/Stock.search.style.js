import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 30px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span:nth-child(2) {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.9rem;
  }
`;

export const RankList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 3px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
    cursor: pointer;
  }
`;

export const RankListLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span:nth-child(1) {
    margin-right: 15px;
  }
`;

export const RankListRight = styled.span`
  color: ${(props) => (props.isCheck ? "#0046FF" : "#FF0000")};
`;

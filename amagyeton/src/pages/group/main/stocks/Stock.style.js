import styled from "styled-components";

export const StockSection = styled.section`
  padding: 20px;
  margin-top: 10px;
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StockPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const StockNamePrice = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const StockRate = styled.span`
  font-size: 0.9rem;
  color: red;
  color: ${(props) => (props.isCheck ? "blue" : "#FF0000")};
`;

export const StockItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`;

export const ProposalDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & button {
    color: white;
    border-radius: 15px;
    border: none;
    width: 43%;
    height: 45px;
  }

  & button:nth-child(1) {
    background-color: #3f8cff;
  }

  & button:nth-child(2) {
    background-color: #ec2a2a;
  }
`;

import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const InfoSection = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const AccountDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 6px 20px;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const ChartDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 6px 20px;
  font-size: 0.9rem;
  height: 300px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RateSpan = styled.span`
  color: red;
  position: absolute;
  top: 38%;
  left: 43%;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const RoleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & button {
    border: none;
    color: white;
    background-color: #3f8cff;
    padding: 16px;
    font-size: 1.1rem;
    font-weight: bold;
    width: 28%;
    border-radius: 20px;
  }
`;

export const PortfolioInfoDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
  font-size: 0.9rem;
  height: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioInfoItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 8px;

  & label {
    font-weight: 400;
  }

  & span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.1rem;
  }
`;

export const PortfolioRateDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.2rem;
  margin-bottom: 8px;

  & label {
    font-weight: 400;
  }
`;

export const RateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & span:nth-child(1) {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.1rem;
  }
  & span:nth-child(2) {
    color: tomato;
    font-size: 0.9rem;
  }
`;

export const TransactionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 1rem;

  & span {
    color: #91b0fe;
  }
`;

export const ArrowIcon = styled(KeyboardArrowRightIcon)`
  color: #91b0fe;
`;

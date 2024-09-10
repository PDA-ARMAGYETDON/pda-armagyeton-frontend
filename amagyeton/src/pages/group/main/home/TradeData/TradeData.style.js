import styled from "styled-components";
import { MdCancel } from "react-icons/md";

export const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

export const TradeListDiv = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const TradeListItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
`;

export const TradeItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NonChartDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 6px 20px;
  font-size: 0.9rem;
  height: 300px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NonIcon = styled(MdCancel)`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

export const DateDiv = styled.div`
  color: #094fff;
  font-size: 1.1rem;
  border-bottom: 1.2px solid #094fff;
  padding-bottom: 10px;
`;

export const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const ItemLeft = styled.div`
  width: 40%;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
export const ItemLRight = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => (props.isCheck ? "#FF1010" : "#1500FF")};
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

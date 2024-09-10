import styled from "styled-components";
import { MdCancel } from "react-icons/md";

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const ItemDiv = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const AccountInfo = styled.div`
  width: 100%;
  aspect-ratio: 4/1.8;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  padding-bottom: 10px;
`;

export const AccountInfoDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & span:nth-child(2) {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.9rem;
  }
`;

export const AccountInfoPrice = styled.div`
  width: 100%;
  text-align: end;
  font-size: 1.9rem;
`;

export const Transaction = styled.div`
  width: 100%;
  max-height: 500px;
  aspect-ratio: 4/5;
  overflow-y: scroll;
  background-color: white;
  border-radius: 30px;
  padding: 25px;
`;

export const TransactionDate = styled.div`
  color: #094fff;
  font-size: 1rem;
  padding-bottom: 10px;
  border-bottom: 1px solid #094fff;
`;

export const TransactionDetail = styled.div.attrs((props) => ({
  isNegative: props.isNegative,
}))`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  padding-bottom: 5px;
  font-size: 1.1rem;

  & span:nth-child(2) {
    color: ${(props) => (props.isNegative ? "#004DFD" : "#FF5353")};
  }
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

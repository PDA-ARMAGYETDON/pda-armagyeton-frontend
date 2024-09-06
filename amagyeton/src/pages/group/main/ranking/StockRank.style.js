import styled from "styled-components";
import { FaUsers } from "react-icons/fa";

export const Section = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const RankListDiv = styled.div`
  z-index: 10;
  margin-top: -90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  padding-top: 30px;

  width: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const RankListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;

  & span:nth-child(1) {
    width: 15%;
    font-weight: bold;
    font-size: 1rem;
  }
  & span:nth-child(2) {
    width: 45%;
    text-align: start;
    padding-left: 20px;
    font-size: 0.9rem;
  }
  & span:nth-child(3) {
    width: 20%;
    background-color: #fcd5d9;
    color: #f0142f;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 0.9rem;
  }
  & span:nth-child(4) {
    width: 15%;
    color: #ff0000;
    font-weight: 0.8rem;
  }
`;

export const TopRank = styled.div`
  position: relative;
`;

export const FirstRank = styled.span`
  width: 100px;
  position: absolute;
  left: 36%;
  top: -50px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SecondRank = styled.span`
  width: 100px;
  position: absolute;
  left: 10%;
  top: -20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ThirdRank = styled.span`
  width: 100px;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupIcon1 = styled(FaUsers)`
  font-size: 3rem !important;
  color: #ffd700;
`;
export const GroupIcon2 = styled(FaUsers)`
  font-size: 3rem !important;
  color: #c0c0c0;
`;
export const GroupIcon3 = styled(FaUsers)`
  font-size: 3rem !important;
  color: #cd7f32;
`;

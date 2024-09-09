import styled from "styled-components";
import { BsChatDotsFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { PiRankingBold } from "react-icons/pi";
import { FaHospitalUser } from "react-icons/fa6";

export const FooterDiv = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 20px 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0px;
  background-color: white;
`;

export const FooterIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & span {
    margin-top: 5px;
    font-size: 0.7rem;
  }
`;

export const GroupIcon = styled(FaLayerGroup)`
  font-size: 1.4rem !important;
  color: ${(props) => (props.active ? "#3f8cff" : "rgba(0, 0, 0, 0.2)")};
`;

export const ChatIcon = styled(BsChatDotsFill)`
  font-size: 1.4rem !important;
  color: ${(props) => (props.active ? "#3f8cff" : "rgba(0, 0, 0, 0.2)")};
`;

export const ChartIcon = styled(FaChartLine)`
  font-size: 1.4rem !important;
  color: ${(props) => (props.active ? "#3f8cff" : "rgba(0, 0, 0, 0.2)")};
`;

export const DashIcon = styled(MdSpaceDashboard)`
  font-size: 1.4rem !important;
  color: ${(props) => (props.active ? "#3f8cff" : "rgba(0, 0, 0, 0.2)")};
`;

export const RankIcon = styled(PiRankingBold)`
  font-size: 1.4rem !important;
  color: ${(props) => (props.active ? "#3f8cff" : "rgba(0, 0, 0, 0.2)")};
`;

export const MyPageIcon = styled(FaHospitalUser)`
  font-size: 1.4rem !important;
  color: ${(props) => (props.active ? "#3f8cff" : "rgba(0, 0, 0, 0.2)")};
`;

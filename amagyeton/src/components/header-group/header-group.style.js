import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const MoblieDivHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;

  & div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
  }

  & div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    text-align: center;
  }

  & div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    text-align: center;
  }

  & img {
    width: 33px;
    height: 33px;
  }

  & span {
    font-weight: 500;
    font-size: 1.1rem;
    margin-left: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  padding: 30px;
  padding-top: 40px;
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const CheckListIcon = styled(KeyboardArrowDownIcon)`
  margin-left: 5px;
`;

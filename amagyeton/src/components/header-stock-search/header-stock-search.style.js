import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FiSearch } from "react-icons/fi";

export const MoblieDivHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  transition: transform 0.3s ease-in-out;

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
    width: 100%;
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

export const SearchDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: #f4f4f4;
  padding: 5px 20px;
  border: none;
  border-radius: 13px;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 1.3rem;
  position: absolute;
  right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

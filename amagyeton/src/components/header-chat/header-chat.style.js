import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IoMenu } from "react-icons/io5";
import { Drawer } from "antd";

export const MoblieDivHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #f5f7fa;
  transition: transform 0.3s ease-in-out;

  & div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 33%;
  }

  & div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    text-align: center;
  }

  & div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    text-align: center;
  }

  & img {
    width: 33px;
    height: 33px;
  }

  & span {
    font-weight: 500;
    font-size: 17px;
    margin-left: 5px;
  }

  padding: 30px;
  padding-top: 40px;
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const MenuIcon = styled(IoMenu)`
  font-size: 1.7rem;

  &:hover {
    cursor: pointer;
  }
`;

export const DrawerCustom = styled(Drawer)`
  position: absolute !important;
`;

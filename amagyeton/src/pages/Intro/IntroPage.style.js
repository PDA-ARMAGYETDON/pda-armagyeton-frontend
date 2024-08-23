import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const MoblieDiv = styled.div`
  width: 100%;
  margin: 0px auto;
  background-image: url("/images/background_scroll.png");
  background-size: cover;
  position: relative;
`;

export const BodyDiv = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BodyItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0; /* 초기 상태는 보이지 않음 */
  transition: opacity 0.5s ease-in-out;
  margin-bottom: 100px;

  &.visible {
    opacity: 1;
  }

  & img {
    margin-top: 40px;
    width: 95%;
    border-radius: 30px;
  }
`;

export const BodyItemBigText = styled.h1`
  & span {
    color: #456efe;
  }
`;

export const BodyItemBigText2 = styled.h1`
  & p {
    color: #787878;
  }
  & span {
    color: #456efe;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyItemSmallText = styled.p`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterNav = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div:hover {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const GroupAddBtnDiv = styled.div`
  width: 50%;
  max-width: 440px;
  min-width: 300px;
  position: fixed;
  bottom: 5px;
  background-color: blue;
  padding: 15px 22px;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;

  &:hover {
    cursor: pointer;
  }
`;

export const ScrollToTopButton = styled(KeyboardArrowUpIcon)`
  position: fixed;
  right: 20px;
  bottom: 70px;
  background-color: #456efe;
  color: white;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  z-index: 1000;
  font-size: 40px !important;

  &:hover {
    background-color: #3549d1;
  }
`;

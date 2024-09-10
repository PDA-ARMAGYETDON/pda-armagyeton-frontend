import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteIcon from "@mui/icons-material/Delete";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 20px;
  gap: 5px;
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const InfoEditIcon = styled(EditIcon)`
  cursor: pointer;
  color: #007bff;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/1.8;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  padding-bottom: 10px;
  margin: 20px 0px;
`;

export const UserInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 17px;
  font-weight: semibold;
  color: #23303b;
  font-weight: 500;
`;

export const Value = styled.span`
  font-size: 17px;
  color: #656565;
`;

export const Button = styled.button`
  width: 152px;
  height: 32px;
  align-items: center;
  text-align: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ActionSection = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  color: rgba(0, 0, 0, 0.5);
`;

export const LogoutRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);

  & span {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const WithdrawRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  color: #ff5353;
  cursor: pointer;

  & span {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const OutIcon = styled(LogoutIcon)`
  color: #474444;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  flex: 1;
  margin-left: 5px;
`;

export const WithdrawIcon = styled(FaRegTrashAlt)`
  color: #ff5353;
  font-size: 1.1rem;
  flex: 1;
  margin-left: 5px;
`;

// 모달 스타일
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 30px 40px 20px 40px;
  border-radius: 55px;
  width: 80%;
  max-width: 400px;
  text-align: center;
`;

export const ModalIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ModalDescription = styled.p`
  font-size: 14px;
  color: #5e5e5e;
  margin-bottom: 5px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  margin-top: 35px;
`;

export const ModalConfirmButton = styled.button`
  background-color: #ff5353;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d9363e;
  }
`;

export const ModalCancelButton = styled.button`
  background-color: white;
  color: #b7b7b7;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #c0c0c0;
  }
`;

export const LogoutModalContainer = styled.div`
  background: black;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  width: 80%;
  max-width: 400px;
`;

export const LogoutMessage = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 0;
`;

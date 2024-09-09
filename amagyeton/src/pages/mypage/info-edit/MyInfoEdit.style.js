import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

export const UserInfoContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  margin: 20px 0 30px 0;
`;

export const UserInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Label = styled.span`
  font-size: 17px;
  color: #23303b;
  font-weight: 600;
`;

export const Value = styled.input`
  width: 100%;
  height: 50px;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  font-size: 15px;
  color: #333;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #456efe;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

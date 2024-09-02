import styled from "styled-components";

export const InfoSection = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const AccountDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 6px 20px;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const ChartDiv = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 6px 20px;
  font-size: 0.9rem;
  height: 300px;
  margin-bottom: 20px;
`;

export const RoleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & button {
    border: none;
    color: white;
    background-color: #3f8cff;
    padding: 16px;
    font-size: 1.1rem;
    font-weight: bold;
    width: 28%;
    border-radius: 20px;
  }
`;

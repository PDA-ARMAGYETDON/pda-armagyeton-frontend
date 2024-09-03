import styled from "styled-components";

export const AccountSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TextDiv = styled.div``;

export const ColorSpan = styled.span`
  color: #3f8cff;
`;

export const BigText = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px 0px;
`;

export const SmallText = styled.span`
  display: block;
  font-size: 0.9rem;
`;

export const AccountItemDiv = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 80%;
  }
`;

export const CompleteBtn = styled.button`
  width: 70%;
  background-color: #195efd;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 12px;
  padding: 9px 20px;
  margin-top: 10px;
`;

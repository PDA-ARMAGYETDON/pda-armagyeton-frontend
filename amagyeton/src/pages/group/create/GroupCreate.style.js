import styled from "styled-components";

export const GroupCreateSection = styled.section`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

export const CreateBtn = styled.button`
  width: 80%;
  margin-top: 20px;
  border: none;
  background-color: #004dfd;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
`;

export const GroupCreateText = styled.div`
  margin-top: 25px;

  & p {
    font-size: 0.9rem;
  }
  & span {
    color: #195efd;
  }
`;

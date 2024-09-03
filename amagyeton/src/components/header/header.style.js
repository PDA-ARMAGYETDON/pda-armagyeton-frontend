import styled from "styled-components";

export const MoblieDivHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
  }

  & img {
    width: 33px;
    height: 33px;
  }

  & span {
    font-weight: 600;
    font-size: 1.2rem;

    margin-left: 5px;
  }

  padding: 40px;
`;

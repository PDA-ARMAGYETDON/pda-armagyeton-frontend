import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  background-image: white;
  background-size: cover;
  position: relative;
`;

const StockViewPage = ({ children }) => {
  return (
    <>
      <MainDiv>{children}</MainDiv>
    </>
  );
};

export default StockViewPage;

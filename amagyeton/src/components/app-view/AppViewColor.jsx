import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  background-image: url("/images/background_portfolio.png");
  background-size: cover;
  // position: relative;
`;

const AppViewColorPage = ({ children }) => {
  return (
    <>
      <MainDiv>{children}</MainDiv>
    </>
  );
};

export default AppViewColorPage;

import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  background-image: url("/images/background_scroll.png");
  background-size: cover;
  position: relative;
`;

const AppViewPage = ({ children }) => {
  return (
    <>
      <MainDiv>{children}</MainDiv>
    </>
  );
};

export default AppViewPage;

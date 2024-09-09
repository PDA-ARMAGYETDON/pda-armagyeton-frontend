import styled from "styled-components";
import AppViewPage from "../../components/app-view/AppView";
import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
  padding: 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 2.3rem;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;

const HomeBtn = styled.button`
  background-color: black;
  color: white;
  border-radius: 20px;
  padding: 6px 70px;
  margin: 40px 0px;
  margin-bottom: 60px;
`;

// const ErrorImg = styled.img`
//   width: 90%;
// `;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClickMoveToHome = () => {
    navigate("/");
  };
  return (
    <AppViewPage>
      <MainDiv>
        <Title>404 ERROR</Title>
        <SubTitle>죄송합니다. 페이지를 찾을 수 없습니다.</SubTitle>
        <SubTitle>존재하지 않는 주소를 입력하셨거나</SubTitle>
        <SubTitle>요청하신 페이지의 주소가</SubTitle>
        <SubTitle>변경, 삭제되어 찾을 수 없습니다.</SubTitle>
        <HomeBtn onClick={onClickMoveToHome}>홈으로</HomeBtn>
        {/* <ErrorImg src="https://kakaoenterprise.com/wp-content/themes/kakaoenterprise/images/layout/kep-404-object.png" /> */}
      </MainDiv>
    </AppViewPage>
  );
};

export default NotFoundPage;

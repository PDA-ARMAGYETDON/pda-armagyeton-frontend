import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as S from "./App.styles";
import IntroPage from "./pages/Intro/IntroPage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <S.AppDiv>
          <S.AppMobileDiv>
            <Router>
              <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Router>
          </S.AppMobileDiv>
        </S.AppDiv>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;

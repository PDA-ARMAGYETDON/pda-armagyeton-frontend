import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as S from "./App.styles";
import IntroPage from "./pages/Intro/IntroPage";
import AccessPage from "./pages/login/AccessPage";

function App() {
  return (
    // <TransitionGroup>
    //   <CSSTransition key={location.key} classNames="page" timeout={300}>

    //   </CSSTransition>
    // </TransitionGroup>

    <S.AppDiv>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<AccessPage />} />
        </Routes>
      </Router>
    </S.AppDiv>
  );
}

export default App;

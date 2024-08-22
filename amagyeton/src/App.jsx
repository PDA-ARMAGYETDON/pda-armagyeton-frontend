import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./App.styles";
import IntroPage from "./pages/Intro/IntroPage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <S.AppDiv>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </S.AppDiv>
  );
}

export default App;

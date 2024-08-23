import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./App.styles";
import IntroPage from "./pages/Intro/IntroPage";
import AccessPage from "./pages/access/AccessPage";

function App() {
  return (
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

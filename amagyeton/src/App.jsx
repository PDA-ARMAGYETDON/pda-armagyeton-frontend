import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./App.styles";
import IntroPage from "./pages/Intro/IntroPage";
import AccessPage from "./pages/access/AccessPage";
import SignupPage from "./pages/signup/Signup";
import LoginPage from "./pages/login/Login";

function App() {
  return (
    <S.AppDiv>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/access" element={<AccessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </S.AppDiv>
  );
}

export default App;

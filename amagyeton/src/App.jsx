import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./App.styles";
import IntroPage from "./pages/Intro/IntroPage";
import AccessPage from "./pages/access/AccessPage";
import SignupPage from "./pages/signup/Signup";
import LoginPage from "./pages/login/Login";
import GroupCreatePage from "./pages/group/creaete/GroupCreate";
import GroupWritePage from "./pages/group/write/GroupWrite";
import { Provider } from "react-redux";
import store from "./store/store";
import InvitePage from "./pages/group/invite/Invite";

function App() {
  return (
    <S.AppDiv>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/group">
              <Route path="create" element={<GroupCreatePage />} />
              <Route path="write" element={<GroupWritePage />} />
              <Route path="invite" element={<InvitePage />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </S.AppDiv>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./App.styles";
import IntroPage from "./pages/Intro/IntroPage";
import AccessPage from "./pages/access/AccessPage";
import SignupPage from "./pages/signup/Signup";
import LoginPage from "./pages/login/Login";
import GroupCreatePage from "./pages/group/create/GroupCreate";
import GroupWritePage from "./pages/group/write/GroupWrite";
import { Provider } from "react-redux";
import store from "./store/store";
import InvitePage from "./pages/group/invite/Invite";
import ParticipationPage from "./pages/participation/Participation";
import GroupMainPage from "./pages/group/main/GroupMain";
import PendingGroupPage from "./pages/group/pending/PendingGroup";
import AccountPage from "./pages/group/account/Account";
import AccountSuccessPage from "./pages/group/account-success/Account.success";

function App() {
  return (
    <Provider store={store}>
      <S.AppDiv>
        <Router>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/participation" element={<ParticipationPage />} />
            <Route path="/group">
              <Route path=":id" element={<GroupMainPage />} />
              <Route path=":id/pending" element={<PendingGroupPage />} />
              <Route path="create" element={<GroupCreatePage />} />
              <Route path="write" element={<GroupWritePage />} />
              <Route path="invite" element={<InvitePage />} />
              <Route path=":id/account" element={<AccountPage />} />
              <Route
                path=":id/account/complete"
                element={<AccountSuccessPage />}
              />
            </Route>
          </Routes>
        </Router>
      </S.AppDiv>
    </Provider>
  );
}

export default App;

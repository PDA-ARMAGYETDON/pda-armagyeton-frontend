import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import PendingGroupPage from "./pages/group/pending/PendingGroup";
import AccountPage from "./pages/group/account/Account";
import AccountSuccessPage from "./pages/group/account-success/Account.success";
import GroupMainPage from "./pages/group/main/home/GroupMain";
import GroupChatPage from "./pages/group/main/chat/GroupChat";
import StockPage from "./pages/group/main/stocks/Stock";
import StockSearchPage from "./pages/group/main/stocks/search/Stock.search";
import DashboardPage from "./pages/group/main/dashboard/Dashboard";
import StockRankPage from "./pages/group/main/ranking/StockRank";
import MyPage from "./pages/group/main/mypage/Mypage";
import GroupRolePage from "./pages/group/main/home/GroupRole/GroupRole";
import NotFoundPage from "./pages/not-found/NotFound";
import RoleSuggestPage from "./pages/group/main/home/RoleSuggest/RoleSuggest";
import AccountIndividualPage from "./pages/group/account-individual/Account.individual";
import AccountPersonalSuccessPage from "./pages/group/account-success-personal/Account.personal.success";

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then()
        .catch(function (error) {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

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
            <Route path="/account" element={<AccountIndividualPage />} />
            <Route
              path="/account/complete"
              element={<AccountPersonalSuccessPage />}
            />
            <Route path="/group">
              <Route path=":id" element={<GroupMainPage />} />
              <Route path=":id/pending" element={<PendingGroupPage />} />
              <Route path=":id/groupRole" element={<GroupRolePage />} />
              <Route path=":id/roleSuggest" element={<RoleSuggestPage />} />
              <Route path="create" element={<GroupCreatePage />} />
              <Route path="write" element={<GroupWritePage />} />
              <Route path="invite" element={<InvitePage />} />
              <Route path=":id/account" element={<AccountPage />} />
              <Route path=":id/chat" element={<GroupChatPage />} />
              <Route path=":id/stocks" element={<StockPage />} />
              <Route path=":id/stocks/search" element={<StockSearchPage />} />
              <Route path=":id/dashboard" element={<DashboardPage />} />
              <Route path=":id/ranking" element={<StockRankPage />} />
              <Route path=":id/mypage" element={<MyPage />} />
              <Route
                path=":id/account/complete"
                element={<AccountSuccessPage />}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </S.AppDiv>
    </Provider>
  );
}

export default App;

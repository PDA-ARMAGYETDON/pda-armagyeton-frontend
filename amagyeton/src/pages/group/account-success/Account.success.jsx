import AppViewPage from "../../../components/app-view/AppView";
import AccountSuccessUIPage from "./Account.success.presenter";
import { useNavigate, useParams } from "react-router-dom";

const AccountSuccessPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onClickMoveToHome = () => {
    navigate(`/group/${id}`);
  };
  return (
    <AppViewPage>
      <AccountSuccessUIPage onClickMoveToHome={onClickMoveToHome} />
    </AppViewPage>
  );
};

export default AccountSuccessPage;

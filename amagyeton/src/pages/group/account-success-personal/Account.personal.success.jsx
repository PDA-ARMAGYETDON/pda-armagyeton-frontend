import AppViewPage from "../../../components/app-view/AppView";
import { useNavigate, useParams } from "react-router-dom";
import AccountSuccessUIPage from "./Account.personal.success.presenter";

const AccountPersonalSuccessPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onClickMoveToHome = () => {
    navigate(`/group/access`);
  };
  return (
    <AppViewPage>
      <AccountSuccessUIPage onClickMoveToHome={onClickMoveToHome} />
    </AppViewPage>
  );
};

export default AccountPersonalSuccessPage;

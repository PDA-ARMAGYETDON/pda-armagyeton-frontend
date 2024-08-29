import { useNavigate } from "react-router-dom";
import AppViewPage from "../../../components/app-view/AppView";
import GroupCreateUIPage from "./GroupCreate.presenter";

const GroupCreatePage = () => {
  const navigate = useNavigate();

  const onClickMoveToWrite = () => {
    navigate("/group/write");
  };
  return (
    <AppViewPage
      children={<GroupCreateUIPage onClickMoveToWrite={onClickMoveToWrite} />}
    />
  );
};

export default GroupCreatePage;

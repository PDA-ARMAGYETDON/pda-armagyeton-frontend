import { useNavigate } from "react-router-dom";
import AppViewPage from "../../../components/app-view/AppView";
import GroupCreateUIPage from "./GroupCreate.presenter";

const GroupCreatePage = () => {
  const navigate = useNavigate();

  const onClickMoveToWrite = () => {
    navigate("/group/write");
  };

  const onClickMoveToParticipation = () => {
    navigate("/participation");
  };
  return (
    <AppViewPage
      children={
        <GroupCreateUIPage
          onClickMoveToWrite={onClickMoveToWrite}
          onClickMoveToParticipation={onClickMoveToParticipation}
        />
      }
    />
  );
};

export default GroupCreatePage;

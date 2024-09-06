import { useNavigate } from "react-router-dom";
import AppViewPage from "../../../components/app-view/AppView";
import GroupCreateUIPage from "./GroupCreate.presenter";
import { useAuth } from "../../../components/commons/hooks/useAuth";
import NonMemberModal from "../../../components/non-member/NonMember";

const GroupCreatePage = () => {
  const { isModalOpen, handleModalClose } = useAuth();
  const navigate = useNavigate();

  const onClickMoveToWrite = () => {
    navigate("/group/write");
  };

  const onClickMoveToParticipation = () => {
    navigate("/participation");
  };

  return (
    <AppViewPage>
      <GroupCreateUIPage
        onClickMoveToWrite={onClickMoveToWrite}
        onClickMoveToParticipation={onClickMoveToParticipation}
      />
      {isModalOpen && (
        <NonMemberModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </AppViewPage>
  );
};

export default GroupCreatePage;

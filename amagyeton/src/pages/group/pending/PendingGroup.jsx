import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppViewPage from "../../../components/app-view/AppView";
import PendingGroupUIPage from "./PendingGroup.presenter";
import { useNavigate, useParams } from "react-router-dom";
import { CreateTeam, participationGroup } from "../../../lib/apis/apis";
import { useState } from "react";
import ParticipationModal from "../../../components/pt-sc-modal/PtScModal";
import CreateGroupModal from "./CreateGroupModal";
import AppViewColorPage from "../../../components/app-view/AppViewColor";

const PendingGroupPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { id } = useParams();

  const onShareInviteCode = (code) => () => {
    console.log(code);
    const inviteUrl = `${window.location.origin}/participation?code=${code}`; // 초대 코드가 포함된 URL 생성

    if (navigator.share) {
      navigator
        .share({
          title: "친구를 초대하세요!",
          text: `홍길동님의 초대코드는: ${code}`,
          url: inviteUrl,
        })
        .then(() => console.log("공유 성공!"))
        .catch((error) => console.error("공유 실패:", error));
    } else {
      navigator.clipboard
        .writeText(inviteUrl)
        .then(() => toast.success("초대 링크가 클립보드에 복사되었습니다!"))
        .catch(() => toast.error("초대 링크 복사에 실패했습니다."));
    }
  };

  const onClickAccount = async () => {
    const res = await CreateTeam();
    setIsCreateOpen(true);
    console.log(res);
  };

  const onClickJoingroup = async () => {
    const res = await participationGroup(id);
    console.log(res);
    setIsOpen(true);
  };

  const handlePartiModalClose = () => {
    setIsOpen(false);
    navigate(`/group/${id}`);
  };

  const handleModalCreateClose = () => {
    setIsCreateOpen(false);
    navigate(`/group/${id}/account`);
  };
  return (
    <AppViewColorPage>
      <PendingGroupUIPage
        onShareInviteCode={onShareInviteCode}
        onClickAccount={onClickAccount}
        onClickJoingroup={onClickJoingroup}
      />
      {isOpen && (
        <ParticipationModal isOpen={isOpen} onClose={handlePartiModalClose} />
      )}

      {isCreateOpen && (
        <CreateGroupModal
          isOpen={isCreateOpen}
          onClose={handleModalCreateClose}
        />
      )}
    </AppViewColorPage>
  );
};

export default PendingGroupPage;

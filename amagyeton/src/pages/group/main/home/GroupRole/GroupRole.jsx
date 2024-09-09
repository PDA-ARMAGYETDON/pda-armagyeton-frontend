import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroupRoleUIPage from "./GroupRole.presenter";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppViewColorPage from "../../../../../components/app-view/AppViewColor";

const PendingGroupPage = () => {
  const inviteCode = useSelector((state) => state.group.inviteCode);
  const navigate = useNavigate();

  const onShareInviteCode = () => {
    console.log(inviteCode);
    const inviteUrl = `${window.location.origin}/participation?code=${inviteCode}`; // 초대 코드가 포함된 URL 생성

    if (navigator.share) {
      navigator
        .share({
          title: "친구를 초대하세요!",
          text: `홍길동님의 초대코드는: ${inviteCode}`,
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

  const onClickAccount = () => {
    navigate("/group/account");
  };
  return (
    <AppViewColorPage>
      <GroupRoleUIPage
        onShareInviteCode={onShareInviteCode}
        onClickAccount={onClickAccount}
      />
    </AppViewColorPage>
  );
};

export default PendingGroupPage;

import { useEffect, useState } from "react";
import AppViewPage from "../../../components/app-view/AppView";
import * as S from "./Invite.style";
import { generateInviteCode } from "../../../lib/utils/randomCode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InvitePage = () => {
  const [inviteCode, setInviteCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const newCode = generateInviteCode(6);
    setInviteCode(newCode);
  }, []);

  const onClickMoveToHome = () => {
    navigate("/group/create");
  };

  const onCopyCode = () => {
    if (inviteCode) {
      navigator.clipboard
        .writeText(inviteCode)
        .then(() => {
          toast.success("초대코드가 복사되었습니다!");
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
          toast.error("초대코드 복사에 실패했습니다.");
        });
    }
  };

  const onShareInviteCode = () => {
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

  return (
    <AppViewPage>
      <S.MainDiv>
        <S.MainTitleDiv>
          <p>모임을 같이할 친구를</p>
          <p>초대해주세요</p>
        </S.MainTitleDiv>
        <S.InviteCodeItem>
          <div>홍길동님의 초대코드는</div>
          <S.InviteCodeDiv>
            <S.InviteCode>{inviteCode}</S.InviteCode>
            <S.CopyIcon onClick={onCopyCode} />
          </S.InviteCodeDiv>
        </S.InviteCodeItem>
        <S.CodeShareDiv onClick={onShareInviteCode}>
          <S.CustomShareIcon />
          <span>코드 공유하기</span>
        </S.CodeShareDiv>
        <S.HomeDiv>
          <span onClick={onClickMoveToHome}>홈으로</span>
        </S.HomeDiv>
      </S.MainDiv>
      <S.CustomToastContainer position="bottom-center" autoClose={3000} />
    </AppViewPage>
  );
};

export default InvitePage;

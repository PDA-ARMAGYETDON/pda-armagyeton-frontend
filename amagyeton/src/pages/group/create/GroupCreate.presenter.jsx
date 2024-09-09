import HeaderBackPage from "../../../components/header-back/header-back";
import * as S from "./GroupCreate.style";

const GroupCreateUIPage = (props) => {
  return (
    <>
      <HeaderBackPage />
      <S.GroupCreateSection>
        <img src="/images/group.png" />
        <S.CreateBtn onClick={props.onClickMoveToWrite}>
          모임 생성하기
        </S.CreateBtn>
        <S.GroupCreateText>
          <p>
            이미 받은 코드가 있다면?
            <span
              onClick={props.onClickMoveToParticipation}
              style={{ cursor: "pointer" }}
            >
              모임 참여하기
            </span>
          </p>
        </S.GroupCreateText>
      </S.GroupCreateSection>
    </>
  );
};

export default GroupCreateUIPage;

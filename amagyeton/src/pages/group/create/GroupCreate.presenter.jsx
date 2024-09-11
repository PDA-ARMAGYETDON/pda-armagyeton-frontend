import HeaderNoBackPage from "../../../components/header-back/header-no-back";
import * as S from "./GroupCreate.style";

const GroupCreateUIPage = (props) => {
  return (
    <>
      <HeaderNoBackPage />
      <S.GroupCreateSection>
        <img src="/images/group.png" style={{ margin: '50px 0' }} />
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
              &nbsp;모임 참여하기
            </span>
          </p>
        </S.GroupCreateText>
      </S.GroupCreateSection>
    </>
  );
};

export default GroupCreateUIPage;

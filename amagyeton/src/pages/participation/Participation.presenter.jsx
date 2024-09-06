import AppViewPage from "../../components/app-view/AppView";
import HeaderBackPage from "../../components/header-back/header-back";
import * as S from "./Participation.style";

const ParticipationUIPage = (props) => {
  return (
    <AppViewPage>
      <S.ContainerDiv>
        <HeaderBackPage />
        <S.BodyDiv>
          <img src="/images/code.png" />
          <S.GroupWriteIntro>
            <S.ColorSpan>모임장님이 제공한 참여코드를</S.ColorSpan>
            <br />
            <span>입력해주세요</span>
          </S.GroupWriteIntro>
          <S.CodeDiv>
            <span>코드를 입력해주세요</span>
            <S.CodeCheckDiv>
              {props.code.map((value, index) => (
                <S.CodeCheckInput
                  key={index}
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => props.setCode(index, e.target.value)}
                  onKeyDown={(e) => props.handleKeyDown(index, e)}
                  ref={(el) => (props.inputRefs.current[index] = el)}
                  onPaste={index === 0 ? props.handlePaste : undefined}
                  autoFocus={index === 0}
                  hasValue={value !== ""}
                />
              ))}
            </S.CodeCheckDiv>
          </S.CodeDiv>
        </S.BodyDiv>
        <S.InputContainer>
          <S.SubmitButton
            disabled={!props.check}
            onClick={props.onClickMoveToCheckInvite}
          >
            참여하기
          </S.SubmitButton>
        </S.InputContainer>
      </S.ContainerDiv>
    </AppViewPage>
  );
};

export default ParticipationUIPage;

import HeaderBackPage from "../../../components/header-back/header-back";
import { formatCurrency } from "../../../lib/utils/formatCurrency";
import { formatDate } from "../../../lib/utils/formatDate";
import * as S from "./PendingGroup.style";
import { useSelector } from "react-redux";

const data = {
  name: "에스파는 나야", // 모임명
  category: "여행", // 카테고리
  startAt: formatDate("2024-09-01T10:00:00".split("T")[0]), //모임 시작
  endAt: formatDate("2024-09-01T12:00:00".split("T")[0]), //모임 종료
  prdyVrssRt: 2.5, // 전일 대비 등락율
  urgentTradeUpvotes: 5, //긴급 매도 찬성인원
  tradeUpvotes: 5, // 매매 규칙 찬성인원
  depositAmt: 10000, // 1인당 기간별 납부금액
  period: 7, // 납부 주기
  payDate: "2024-09-15", // 납부 시작일
  maxLossRt: -5.0, // 해체 규정 최대 손실
  maxProfitRt: 15.0, // // 해체 규정 최대 수익
  invitedMembers: 4, // 참가자 인원
  isLeader: 1, // 리더인지
  isParticipating: 1, // 참가자인지
};

const role = [
  { label: "최초 납부금", value: `${formatCurrency(data.depositAmt)}원` },
  { label: "기간별 납부 금액", value: `${formatCurrency(data.depositAmt)}원` },
  { label: "납부 시작일", value: formatDate(data.payDate.split("T")[0]) },
  { label: "납부 주기", value: `${data.isParticipating + 1}일` },
];

const trading_rules = [
  { label: "찬성 인원", value: `${data.invitedMembers}명` },
];
const urgent_role = [
  { label: "전일 대비 등락율", value: `-${data.prdyVrssRt}%` },
  { label: "찬성인원", value: `${data.urgentTradeUpvotes}명` },
];

const meeting_period = [{ label: "가입 종료", value: `${data.endAt}` }];
const dissolution_role = [
  { label: "최대 수익", value: `${data.maxProfitRt}%` },
  { label: "최대 손실", value: `${data.maxLossRt}%` },
];

const PendingGroupUIPage = (props) => {
  const headCount = useSelector((state) => state.headCount.headCount);

  return (
    <>
      <HeaderBackPage />
      <S.PendingDiv>
        <S.PendingIntro>
          <S.ColorSpan>
            {data.isLeader === 1
              ? headCount - 1 === data.invitedMembers
                ? "모든 인원이 모였습니다!"
                : "인원이 다 모였다면 모임을 확정해"
              : "모임 확정 대기중에요"}
          </S.ColorSpan>
          <br />
          <span>
            {data.isLeader === 1
              ? headCount - 1 === data.invitedMembers
                ? "이제 모임 투자를 시작해보세요"
                : "모임투자를 시작해보세요."
              : ""}
          </span>
        </S.PendingIntro>
        <S.GroupInfoSection>
          <S.GroupInfoDiv>
            <S.GroupInfoItem>
              <S.ColorSpan>모임명</S.ColorSpan>
              <span>{data.name}</span>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.ColorSpan>모임 인원</S.ColorSpan>
              <span>{data.invitedMembers + 1}명</span>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.ColorSpan>모임 기간</S.ColorSpan>
              <span>{`${data.startAt} ~ ${data.endAt}`}</span>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.ColorSpan>카테고리</S.ColorSpan>
              <S.Category>{data.category}</S.Category>
            </S.GroupInfoItem>
          </S.GroupInfoDiv>

          <S.GroupInfoDiv>
            <S.GroupInfoItem>
              <S.LabelSpan>규칙</S.LabelSpan>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.RoleDiv>
                {role.map((rule, index) => (
                  <S.GroupInfoItem key={index}>
                    <span>{rule.label}</span>
                    <span>{rule.value}</span>
                  </S.GroupInfoItem>
                ))}
              </S.RoleDiv>
            </S.GroupInfoItem>
          </S.GroupInfoDiv>

          <S.GroupInfoDiv>
            <S.GroupInfoItem>
              <S.LabelSpan>매매 규칙</S.LabelSpan>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.RoleDiv>
                {trading_rules.map((rule, index) => (
                  <S.GroupInfoItem key={index}>
                    <span>{rule.label}</span>
                    <span>{rule.value}</span>
                  </S.GroupInfoItem>
                ))}
              </S.RoleDiv>
            </S.GroupInfoItem>
          </S.GroupInfoDiv>

          <S.GroupInfoDiv>
            <S.GroupInfoItem>
              <S.LabelSpan>긴급 매도 규칙</S.LabelSpan>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.RoleDiv>
                {urgent_role.map((rule, index) => (
                  <S.GroupInfoItem key={index}>
                    <span>{rule.label}</span>
                    <span>{rule.value}</span>
                  </S.GroupInfoItem>
                ))}
              </S.RoleDiv>
            </S.GroupInfoItem>
          </S.GroupInfoDiv>

          <S.GroupInfoDiv>
            <S.GroupInfoItem>
              <S.LabelSpan>모임 기간</S.LabelSpan>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.RoleDiv>
                {meeting_period.map((rule, index) => (
                  <S.GroupInfoItem key={index}>
                    <span>{rule.label}</span>
                    <span>{rule.value.split("T")[0]}</span>
                  </S.GroupInfoItem>
                ))}
              </S.RoleDiv>
            </S.GroupInfoItem>
          </S.GroupInfoDiv>

          <S.GroupInfoDiv>
            <S.GroupInfoItem>
              <S.LabelSpan>
                해체 규정 <S.SmallSpan>(전체 수익률)</S.SmallSpan>
              </S.LabelSpan>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.RoleDiv>
                {dissolution_role.map((rule, index) => (
                  <S.GroupInfoItem key={index}>
                    <span>{rule.label}</span>
                    <span>{rule.value.split("T")[0]}</span>
                  </S.GroupInfoItem>
                ))}
              </S.RoleDiv>
            </S.GroupInfoItem>
          </S.GroupInfoDiv>

          <S.ParticipantDiv>
            <S.LabelSpan>참가자</S.LabelSpan>
            <div>
              {new Array(headCount - 1).fill("").map((_, i) => {
                const isActive = i < data.invitedMembers;
                return <S.Participant key={i} isActive={isActive} />;
              })}
            </div>
            {headCount - 1 - data.invitedMembers !== 0 && (
              <S.AlarmSpan>{`${
                headCount - 1 - data.invitedMembers
              }명의 인원이 더 침기히면 모임 생성이 가능해요`}</S.AlarmSpan>
            )}
          </S.ParticipantDiv>
          {data.isLeader === 1 && (
            <S.ShareBtn
              isCheck={headCount - 1 !== data.invitedMembers}
              onClick={props.onShareInviteCode}
            >
              <S.CustomShareIcon /> <span>초대장 공유하기</span>
            </S.ShareBtn>
          )}

          {data.isParticipating === 1 ? (
            <S.SubmitBtn isCheck={true}>참가하기</S.SubmitBtn>
          ) : (
            <S.SubmitBtn
              isCheck={headCount - 1 === data.invitedMembers}
              onClick={props.onClickAccount}
            >
              모임 생성하기
            </S.SubmitBtn>
          )}
        </S.GroupInfoSection>
      </S.PendingDiv>
      <S.CustomToastContainer position="bottom-center" autoClose={3000} />
    </>
  );
};

export default PendingGroupUIPage;

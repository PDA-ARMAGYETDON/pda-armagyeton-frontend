import HeaderBackPage from "../../../components/header-back/header-back";
import { formatCurrency } from "../../../lib/utils/formatCurrency";
import * as S from "./PendingGroup.style";
import { PendingTeam } from "../../../lib/apis/apis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PendingGroupUIPage = (props) => {
  const [teamData, setTeamData] = useState(null);
  const [code, setCode] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await PendingTeam(id);
      console.log(res);
      if (res) {
        setTeamData(res.data);
        setCode(res.data.invitedCode);
      }
    };
    fetchTeams();
  }, []);

  console.log(teamData);

  const translateCategory = (category) => {
    switch (category) {
      case "TRAVEL":
        return "여행";
      case "HOBBY":
        return "취미";
      case "MEAL":
        return "식비";
      case "SAVING":
        return "저축";
      case "WEDDING":
        return "결혼자금";
      case "ETC":
        return "기타";
      default:
        return category;
    }
  };

  const translatePeriod = (period) => {
    switch (period) {
      case "MONTH":
        return "1달";
      case "WEEK":
        return "1주일";
      default:
        return period;
    }
  };

  const role = [
    {
      label: "최초 납부금",
      value: `${formatCurrency(teamData?.depositAmt)}원`,
    },
    {
      label: "기간별 납부 금액",
      value: `${formatCurrency(teamData?.depositAmt)}원`,
    },
    {
      label: "납부 시작일",
      value: teamData?.payDate
        ? `${teamData.payDate[0]} / ${teamData.payDate[1]} / ${teamData.payDate[2]}`
        : "",
    },
    { label: "납부 주기", value: translatePeriod(teamData?.period) },
  ];

  const trading_rules = [
    { label: "찬성 인원", value: `${teamData?.tradeUpvotes}명` },
  ];

  const urgent_role = [
    { label: "전일 대비 등락율", value: `-${teamData?.prdyVrssRt}%` },
    { label: "찬성인원", value: `${teamData?.urgentTradeUpvotes}명` },
  ];

  const meeting_period = [
    {
      label: "가입 종료",
      value: teamData?.endAt
        ? `${teamData.endAt[0]}-${teamData.endAt[1]}-${teamData.endAt[2]}`
        : "",
    },
  ];

  const dissolution_role = [
    { label: "최대 수익", value: `${teamData?.maxProfitRt}%` },
    { label: "최대 손실", value: `${teamData?.maxLossRt}%` },
  ];

  return (
    <>
      <HeaderBackPage />
      <S.PendingDiv>
        <S.PendingIntro>
          <S.ColorSpan>
            {teamData?.isLeader === 1
              ? teamData?.headCount - 1 === teamData?.invitedMembers
                ? "모든 인원이 모였습니다!"
                : "인원이 다 모였다면 모임을 확정해"
              : "모임 확정 대기중에요"}
          </S.ColorSpan>
          <br />
          <span>
            {teamData?.isLeader === 1
              ? teamData?.headCount - 1 === teamData?.invitedMembers
                ? "이제 모임 투자를 시작해보세요"
                : "모임투자를 시작해보세요."
              : ""}
          </span>
        </S.PendingIntro>
        <S.GroupInfoSection>
          <S.GroupInfoDiv>
            <S.GroupInfoItem>
              <S.ColorSpan>모임명</S.ColorSpan>
              <span>{teamData?.name}</span>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.ColorSpan>모임 인원</S.ColorSpan>
              <span>{teamData?.headCount}명</span>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.ColorSpan>모임 기간</S.ColorSpan>
              <span>
                {teamData?.startAt &&
                  `${teamData?.startAt[0]} / ${teamData?.startAt[1]} / ${teamData?.startAt[2]} ~ ${teamData?.endAt[0]} / ${teamData?.endAt[1]} / ${teamData?.endAt[2]}`}
              </span>
            </S.GroupInfoItem>
            <S.GroupInfoItem>
              <S.ColorSpan>카테고리</S.ColorSpan>
              <S.Category>{translateCategory(teamData?.category)}</S.Category>
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
                    <span>{rule.value}</span>
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
                    <span>{rule.value}</span>
                  </S.GroupInfoItem>
                ))}
              </S.RoleDiv>
            </S.GroupInfoItem>
          </S.GroupInfoDiv>

          <S.ParticipantDiv>
            <S.LabelSpan>참가자</S.LabelSpan>
            <div>
              {teamData?.headCount &&
                new Array(teamData?.headCount - 1).fill("").map((_, i) => {
                  const isActive = i < teamData?.invitedMembers - 1;
                  return <S.Participant key={i} isActive={isActive} />;
                })}
            </div>
            {teamData?.headCount - 1 > teamData?.invitedMembers !== 0 && (
              <S.AlarmSpan>{`${
                teamData?.headCount - teamData?.invitedMembers
              }명의 인원이 더 참여하면 모임 생성이 가능해요`}</S.AlarmSpan>
            )}
          </S.ParticipantDiv>
          {teamData?.isLeader === 1 && (
            <S.ShareBtn
              isCheck={teamData?.headCount - 1 > teamData?.invitedMembers - 1}
              onClick={props.onShareInviteCode(code)}
            >
              <S.CustomShareIcon /> <span>초대장 공유하기</span>
            </S.ShareBtn>
          )}

          {teamData?.isLeader === 1 ? (
            <S.SubmitBtn
              isCheck={teamData?.headCount - 1 === teamData?.invitedMembers - 1}
              onClick={props.onClickAccount}
            >
              모임 생성하기
            </S.SubmitBtn>
          ) : (
            <S.SubmitBtn isCheck={true} onClick={props.onClickJoingroup}>
              참가하기
            </S.SubmitBtn>
          )}
        </S.GroupInfoSection>
      </S.PendingDiv>
      <S.CustomToastContainer position="bottom-center" autoClose={3000} />
    </>
  );
};

export default PendingGroupUIPage;

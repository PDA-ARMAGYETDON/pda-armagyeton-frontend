import * as S from "./GroupRole.style";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../../../lib/utils/formatCurrency";
import HeaderGroupPage from "../../../../../components/header-group/header-group";
import { PendingTeam } from "../../../../../lib/apis/apis";
import { useParams } from "react-router-dom";

const GroupRoleUIPage = () => {
  const [teamData, setTeamData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await PendingTeam(id);
      if (res) {
        console.log(res.data);
        setTeamData(res.data);
      }
    };
    fetchTeams();
  }, []);

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
      <HeaderGroupPage />
      <S.PendingDiv>
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

          <S.GroupInfoLastDiv>
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
          </S.GroupInfoLastDiv>
        </S.GroupInfoSection>
      </S.PendingDiv>
      <S.CustomToastContainer position="bottom-center" autoClose={3000} />
    </>
  );
};

export default GroupRoleUIPage;

import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components"; // Import styled from styled-components
import HeaderGroupPage from "../../../../../components/header-group/header-group";
import FooterNav from "../../../../../components/footer-nav/FooterNav";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./RoleSuggest.style";
import { formatCurrency } from "../../../../../lib/utils/formatCurrency";

const RedText = styled.span`
  color: #d40101;
  font-weight: 600;
`;

const RoleSuggestUIPage = ({
  roleData,
  onClickMoveToCheckInvite,
  groupRole,
  groupInfo,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [curSuggest, setCurSuggest] = useState(null);

  console.log(groupInfo);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurSuggest(index);
    },
    arrows: false,
  };

  const handleSuggest = (index) => () => {
    setCurSuggest((prev) => (prev === index ? null : index));
  };

  const handleAgree = (event) => {
    event.stopPropagation();
  };

  const handleDisagree = (event) => {
    event.stopPropagation();
  };

  const sections = [
    {
      title: "납부규칙",
      data: (
        <>
          모든 멤버는{" "}
          <RedText>{groupRole?.period === "WEEK" ? "1주일" : "매달"}</RedText>
          마다 <RedText>{formatCurrency(groupRole?.depositAmt)}</RedText>원을
          납부해야 합니다.
        </>
      ),
      suggestions: roleData?.payFeeOffers || [],
    },
    {
      title: "긴급 매도규칙",
      data: (
        <>
          ※긴급 상황: 전일 종가 대비 <RedText>{groupRole?.prdyVrssRt}%</RedText>
          등락한 경우
          <br />
          각 종목에 대해 긴급 상황의 경우,
          <br />
          <RedText>{groupRole?.urgentTradeUpvotes}명</RedText>이 찬성하는 경우에
          매매 제안이 수락되어 매도 주문됨.
        </>
      ),
      suggestions: roleData?.urgentSaleOffers || [],
    },
    {
      title: "매매규칙",
      data: (
        <>
          매매를 제안할 때 <RedText>{groupRole?.tradeUpvotes}명</RedText> 이상의
          찬성표를 받아야 매매 주문됨.
        </>
      ),
      suggestions: roleData?.upvoteNumberOffers || [],
    },
    {
      title: "모임 해체 규칙",
      data: (
        <>
          전체 수익률이 <RedText>최대 {groupRole?.maxProfitRt}%</RedText> 달성,
          <RedText>최소 {groupRole?.maxLossRt}%</RedText> 이하인 경우 자동으로
          모임이 해체됨.
        </>
      ),
      suggestions: roleData?.disbandOffers || [],
    },
  ];

  const renderContent = () =>
    sections.map((section, index) => (
      <S.RoleDiv key={index}>
        <label>{section.title}</label>
        <div>{section.data}</div>
      </S.RoleDiv>
    ));

  const renderSuggestionText = (suggestion) => {
    switch (suggestion.type) {
      case "DISBAND":
        return (
          <>
            전체 수익률이 최대 <RedText>{suggestion.maxProfitRt}%</RedText>{" "}
            달성, <RedText>{suggestion.maxLossRt}%</RedText> 이하인 경우
            자동으로 모임이 해체됨.
          </>
        );
      case "PAY_FEE":
        return (
          <>
            모든 멤버는
            <RedText>{formatCurrency(suggestion.depositAmt)}</RedText>원을{" "}
            <RedText>{suggestion.period === "WEEK" ? "1주일" : "매달"}</RedText>
            마다 납부해야 합니다.
          </>
        );
      case "URGENT_SALE":
        return (
          <>
            전일 종가 대비 <RedText>{suggestion.prdyVrssRt}%</RedText> 등락한
            경우, <RedText>{suggestion.tradeUpvotes}명</RedText>이 찬성하는 경우
            매도 주문됨.
          </>
        );
      case "UPVOTE_NUMBER":
        return (
          <>
            매매 제안은 <RedText>{suggestion.tradeUpvotes}명</RedText> 이상의
            찬성표를 받아야 매매 주문됨.
          </>
        );
      default:
        return "제안 내용이 없습니다.";
    }
  };

  const renderSuggestions = () => {
    const currentSection = sections[currentSlide];
    const currentSuggestions = currentSection?.suggestions || [];
    console.log(currentSuggestions);
    return (
      <>
        <S.AddRoleSuggest
          onClick={onClickMoveToCheckInvite(
            currentSection?.title,
            currentSuggestions
          )}
        >
          <S.PlusIcon />
        </S.AddRoleSuggest>

        {currentSuggestions.length > 0 ? (
          currentSuggestions.map((suggestion, i) => (
            <S.RoleInfoItem
              key={i}
              onClick={handleSuggest(i)}
              isCheck={curSuggest === i}
            >
              <span>{renderSuggestionText(suggestion)}</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <S.Voter>홍길동</S.Voter>
                <div>
                  {new Array(suggestion.totalvotes).fill("").map((_, i) => {
                    const isActive = i < suggestion.upvotes;
                    return <S.Participant key={i} isActive={isActive} />;
                  })}
                </div>
              </div>
              {curSuggest === i && (
                <S.ButtonGroup>
                  <S.AgreeButton onClick={handleAgree}>찬성</S.AgreeButton>
                  <S.DisagreeButton onClick={handleDisagree}>
                    반대
                  </S.DisagreeButton>
                </S.ButtonGroup>
              )}
            </S.RoleInfoItem>
          ))
        ) : (
          <S.NonSuggest>
            <S.NonIcon />
            <div>모임원이 제안한 규칙이 없어요</div>
          </S.NonSuggest>
        )}
      </>
    );
  };

  return (
    <>
      <HeaderGroupPage />
      <S.Section>
        <S.Label>
          <label>규칙 제안</label>
        </S.Label>
        <S.SectionItem>
          <S.SliderWrapper>
            <Slider {...settings}>{renderContent()}</Slider>
          </S.SliderWrapper>

          <div style={{ padding: "0px 10px" }}>
            <S.RoleInfoDiv>{renderSuggestions()}</S.RoleInfoDiv>
          </div>
        </S.SectionItem>
      </S.Section>
      <FooterNav />
    </>
  );
};

export default RoleSuggestUIPage;

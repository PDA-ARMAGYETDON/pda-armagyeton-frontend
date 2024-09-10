import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components"; // Import styled from styled-components
import HeaderGroupPage from "../../../../../components/header-group/header-group";
import FooterNav from "../../../../../components/footer-nav/FooterNav";
import base64 from "base-64";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./RoleSuggest.style";
import { formatCurrency } from "../../../../../lib/utils/formatCurrency";
import { RoleVote } from "../../../../../lib/apis/apis";
import RoleVoteModal from "./RoleVoteModal";
import DuplicateModal from "./DuplicateModal";

const RedText = styled.span`
  color: #d40101;
  font-weight: 600;
`;

const RoleSuggestUIPage = ({
  roleData,
  onClickMoveToCheckInvite,
  groupRole,
  groupInfo,
  handlePartiModalClose,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [curSuggest, setCurSuggest] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentVoteType, setCurrentVoteType] = useState(null);
  const [item, setItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleVote = async (item, voteType) => {
    const token = localStorage.getItem("TOKEN");
    const payload = token.split(".")[1];
    const decodedPayload = base64.decode(payload);
    const decodedData = JSON.parse(decodedPayload);
    const userId = decodedData.userId;

    const hasVoted = JSON.parse(
      localStorage.getItem(`voted_${item.id}_${userId}`)
    );

    if (hasVoted) {
      //alert("투표는 한 번만 가능합니다");
      setIsModalOpen(true);
      return;
    }

    const data = { choice: voteType };
    console.log(data, item);
    const res = await RoleVote(item.id, data);

    localStorage.setItem(`voted_${item.id}_${userId}`, JSON.stringify(true));
  };

  const handleAgree = (item) => (event) => {
    event.stopPropagation();
    setCurrentVoteType("PROS");
    setItem(item);
    setIsOpen(true);
  };

  const handleDisagree = (item) => (event) => {
    event.stopPropagation();
    setCurrentVoteType("CONS");
    setItem(item);
    setIsOpen(true);
  };

  const handleRoleVoteClose = () => {
    setIsOpen(false);
    handlePartiModalClose();
  };

  const handleConfirmVote = () => {
    handleVote(item, currentVoteType);
    setIsOpen(false);
    //window.location.reload();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const sections = [
    {
      title: "납부규칙",
      data: (
        <>
          모든 멤버는{" "}
          <RedText>{roleData?.period === "WEEK" ? "1주일" : "매달"}</RedText>
          마다 <RedText>{formatCurrency(roleData?.depositAmt)}</RedText>원을
          납부해야 합니다.
        </>
      ),
      suggestions: groupRole?.payFeeOffers || [],
    },
    {
      title: "긴급 매도규칙",
      data: (
        <>
          ※긴급 상황: 전일 종가 대비 <RedText>{roleData?.prdyVrssRt}%</RedText>
          등락한 경우
          <br />
          각 종목에 대해 긴급 상황의 경우,
          <br />
          <RedText>{roleData?.urgentTradeUpvotes}명</RedText>이 찬성하는 경우에
          매매 제안이 수락되어 매도 주문됨.
        </>
      ),
      suggestions: groupRole?.urgentSaleOffers || [],
    },
    {
      title: "매매규칙",
      data: (
        <>
          매매를 제안할 때 <RedText>{roleData?.tradeUpvotes}명</RedText> 이상의
          찬성표를 받아야 매매 주문됨.
        </>
      ),
      suggestions: groupRole?.upvoteNumberOffers || [],
    },
    {
      title: "모임 해체 규칙",
      data: (
        <>
          전체 수익률이 <RedText>최대 {roleData?.maxProfitRt}%</RedText> 달성,
          <RedText>최소 {roleData?.maxLossRt}%</RedText> 이하인 경우 자동으로
          모임이 해체됨.
        </>
      ),
      suggestions: groupRole?.disbandOffers || [],
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
              accept={
                suggestion.status === "APPROVED" ||
                suggestion.status === "REJECTED" ||
                suggestion.status !== "PROGRESS"
              }
            >
              <div>
                {suggestion.status === "APPROVED" && (
                  <span
                    style={{
                      backgroundColor: "#01DF02",
                      color: "white",
                      marginRight: "10px",
                      padding: "4px 16px",
                      fontSize: "0.8rem",
                      borderRadius: "20px",
                    }}
                  >
                    가결
                  </span>
                )}
                {suggestion.status === "REJECTED" && (
                  <span
                    style={{
                      backgroundColor: "#C93C3C",
                      color: "white",
                      marginRight: "10px",
                      padding: "4px 16px",
                      fontSize: "0.8rem",
                      borderRadius: "20px",
                    }}
                  >
                    부결
                  </span>
                )}

                <span>{renderSuggestionText(suggestion)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <S.Voter>홍길동</S.Voter>
                <div>
                  {new Array(groupInfo?.headCount).fill("").map((_, i) => {
                    const isActive = i < suggestion.upvotes;
                    return <S.Participant key={i} isActive={isActive} />;
                  })}
                </div>
              </div>
              {curSuggest === i &&
                (suggestion.status === "APPROVED" ||
                suggestion.status === "REJECTED" ? (
                  <></>
                ) : (
                  <S.ButtonGroup>
                    <S.AgreeButton onClick={handleAgree(suggestion)}>
                      찬성
                    </S.AgreeButton>
                    <S.DisagreeButton onClick={handleDisagree(suggestion)}>
                      반대
                    </S.DisagreeButton>
                  </S.ButtonGroup>
                ))}
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
      <RoleVoteModal
        isOpen={isOpen}
        onClose={handleRoleVoteClose}
        handleVote={handleVote}
        onConfirmVote={handleConfirmVote}
        currentVoteType={currentVoteType}
      />
      {isModalOpen && (
        <DuplicateModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </>
  );
};

export default RoleSuggestUIPage;

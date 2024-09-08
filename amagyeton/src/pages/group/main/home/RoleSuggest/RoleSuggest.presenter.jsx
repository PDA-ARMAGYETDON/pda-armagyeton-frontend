import { useEffect, useState } from "react";
import Slider from "react-slick"; // Slider library example
import HeaderAlarmPage from "../../../../../components/header-alarm/header-alarm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./RoleSuggest.style";

const RoleSuggestUIPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [curSuggest, setCurSuggest] = useState(null);
  const [roleData, setRoleData] = useState({
    payFeeOffers: [],
    urgentSaleOffers: [],
    upvoteNumberOffers: [],
    disbandOffers: [],
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurSuggest(null); // Reset the selected suggestion when the slide changes
    },
    arrows: false,
  };

  // Simulate fetching data from an API
  useEffect(() => {
    // Mocked API data
    const fetchData = async () => {
      const response = {
        code: 0,
        success: true,
        message: "string",
        data: {
          payFeeOffers: [
            {
              type: "모든 멤버는 매달 20일마다 600,000원 납부",
              upvotes: 2,
              downvotes: 0,
              totalvotes: 5,
              depositAmt: 0,
              period: "WEEK",
              payDate: "2024-09-08",
            },
          ],
          urgentSaleOffers: [
            {
              type: "모든 멤버는 매달 20일마다 600,000원 납부",
              upvotes: 2,
              downvotes: 0,
              totalvotes: 5,
              tradeUpvotes: 0,
              prdyVrssRt: 0,
            },
          ],
          upvoteNumberOffers: [
            {
              type: "모든 멤버는 매달 20일마다 600,000원 납부",
              upvotes: 2,
              downvotes: 0,
              totalvotes: 5,
              tradeUpvotes: 0,
            },
          ],
          disbandOffers: [
            {
              type: "모든 멤버는 매달 20일마다 600,000원 납부",
              upvotes: 2,
              downvotes: 0,
              totalvotes: 5,
              maxLossRt: 0,
              maxProfitRt: 0,
            },
          ],
        },
      };

      // Set fetched data to state
      setRoleData(response.data);
    };

    fetchData();
  }, []);

  const handleSuggest = (index) => () => {
    setCurSuggest((prev) => (prev === index ? null : index));
  };

  const handleAgree = (event) => {
    event.stopPropagation(); // Prevent the suggestion from being toggled off
    console.log("Agree clicked for suggestion", curSuggest);
  };

  const handleDisagree = (event) => {
    event.stopPropagation(); // Prevent the suggestion from being toggled off
    console.log("Disagree clicked for suggestion", curSuggest);
  };

  const renderContent = () => {
    const sections = [
      { title: "납부규칙", data: roleData.payFeeOffers },
      { title: "긴급 매도규칙", data: roleData.urgentSaleOffers },
      { title: "매매규칙", data: roleData.upvoteNumberOffers },
      { title: "모임 해체 규칙", data: roleData.disbandOffers },
    ];

    return sections.map((section, index) => (
      <S.RoleDiv key={index}>
        <label>{section.title}</label>
        {section.data.map((item, i) => (
          <div key={i}>
            <div>모든 맴버는 매달 15일마다 500,000원 납부함.</div>
            <div></div>
          </div>
        ))}
      </S.RoleDiv>
    ));
  };

  const renderSuggestions = () => {
    const suggestionsData = [
      roleData.payFeeOffers,
      roleData.urgentSaleOffers,
      roleData.upvoteNumberOffers,
      roleData.disbandOffers,
    ];

    const currentSuggestions = suggestionsData[currentSlide] || [];

    return (
      <>
        <S.AddRoleSuggest onClick={onClickAddSuggest}>
          <S.PlusIcon />
        </S.AddRoleSuggest>
        {currentSuggestions.map((suggestion, i) => (
          <S.RoleInfoItem
            key={i}
            onClick={handleSuggest(i)}
            isCheck={curSuggest === i}
          >
            <span>{suggestion.type}</span>
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
        ))}
      </>
    );
  };

  return (
    <>
      <HeaderAlarmPage />
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
    </>
  );
};

export default RoleSuggestUIPage;

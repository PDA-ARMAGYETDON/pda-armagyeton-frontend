import { useEffect, useState } from "react";
import Slider from "react-slick"; // Slider library example
import HeaderAlarmPage from "../../../../../components/header-alarm/header-alarm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./RoleSuggest.style";

const RoleSuggestUIPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [curSuggest, setCurSuggest] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    arrows: false,
  };

  useEffect(() => {}, []);

  const RoleContent = [
    {
      title: "납부규칙",
      content: [
        "모든 맴버는 매달 15일마다 500,000원 납부함.",
        "매매를 제안할 때 4명 이상의 찬성표를 받아야 매매 주문됨.",
      ],
      suggestions: [
        "정기적인 납부를 통해 모든 회원의 참여를 확인하세요.",
        "회비 납부 시기와 관련된 알림 기능을 구현해 보세요.",
      ],
    },
    {
      title: "매매규칙",
      content: [
        "모든 맴버는 매달 15일마다 500,000원 납부함.",
        "매매를 제안할 때 4명 이상의 찬성표를 받아야 매매 주문됨.",
      ],
      suggestions: [
        "매매 제안 시 알림을 통해 회원들에게 공지하세요.",
        "매매 찬성표를 관리하는 기능을 추가하세요.",
      ],
    },
    {
      title: "긴급 매도규칙",
      content: [
        "※긴급 상황: 전일 종가 대비 5% 등락한 경우",
        "매매를 제안할 때 4명 이상의 찬성표를 받아야 매매 주문됨.",
      ],
      suggestions: [
        "긴급 상황에 대한 알림을 설정하세요.",
        "긴급 매도 규칙을 명확히 안내하는 페이지를 만들어 보세요.",
      ],
    },
    {
      title: "모임 해체 규칙",
      content: [
        "모든 맴버는 매달 15일마다 500,000원 납부함.",
        "매매를 제안할 때 4명 이상의 찬성표를 받아야 매매 주문됨.",
      ],
      suggestions: [
        "모임 해체 조건을 충족할 경우 자동 알림을 설정하세요.",
        "모임 해체와 관련된 FAQ 페이지를 추가하세요.",
      ],
    },
  ];

  const handleSuggest = (index) => () => {
    // Toggle suggestion buttons on and off
    setCurSuggest((prev) => (prev === index ? null : index));
  };

  const handleAgree = (event) => {
    event.stopPropagation();
    console.log("Agree clicked for suggestion", curSuggest);
  };

  const handleDisagree = (event) => {
    event.stopPropagation();
    console.log("Disagree clicked for suggestion", curSuggest);
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
            <Slider {...settings}>
              {RoleContent.map((e, index) => (
                <S.RoleDiv key={index}>
                  <label>{e.title}</label>
                  {e.content.map((contentItem, i) => (
                    <div key={i}>{contentItem}</div>
                  ))}
                </S.RoleDiv>
              ))}
            </Slider>
          </S.SliderWrapper>

          <div style={{ padding: "0px 10px" }}>
            <S.RoleInfoDiv>
              {RoleContent[currentSlide].suggestions.map((suggestion, i) => (
                <div key={i}>
                  <S.RoleInfoItem
                    onClick={handleSuggest(i)}
                    isCheck={curSuggest === i}
                  >
                    <span>{suggestion}</span>
                    {curSuggest === i && (
                      <S.ButtonGroup>
                        <S.AgreeButton onClick={handleAgree}>
                          찬성
                        </S.AgreeButton>
                        <S.DisagreeButton onClick={handleDisagree}>
                          반대
                        </S.DisagreeButton>
                      </S.ButtonGroup>
                    )}
                  </S.RoleInfoItem>
                </div>
              ))}
            </S.RoleInfoDiv>
          </div>
        </S.SectionItem>
      </S.Section>
    </>
  );
};

export default RoleSuggestUIPage;

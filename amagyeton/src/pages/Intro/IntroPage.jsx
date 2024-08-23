import { useEffect, useRef, useState } from "react";
import * as S from "./IntroPage.style";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../../components/header/header";

const IntroPage = () => {
  const bodyItemRefs = useRef([]);
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    bodyItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      bodyItemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const topDistance = window.scrollY;
      if (topDistance > 100) {
        // 스크롤이 100px 이상 내려가면 버튼 표시
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickMoveLogin = () => {
    navigate("/access");
  };

  return (
    <S.MoblieDiv>
      <HeaderPage />
      <S.BodyDiv>
        <S.BodyItem ref={(el) => (bodyItemRefs.current[0] = el)}>
          <S.BodyItemBigText>
            아마곗돈 <span>모임투자</span>
          </S.BodyItemBigText>
          <S.BodyItemSmallText>
            <p>함께 투자하고 함께 성장하는</p>
            <p>아마곗돈의 모임투자</p>
          </S.BodyItemSmallText>
          <img src="/images/main1.png" alt="main1" />
        </S.BodyItem>
        <S.BodyItem ref={(el) => (bodyItemRefs.current[1] = el)}>
          <S.BodyItemBigText2>
            <p>친구들과 함께 하는</p>
            <span style={{ color: "black" }}>모임투자</span>
          </S.BodyItemBigText2>
          <S.BodyItemSmallText>
            <p>친구들과 간편하게 투자를 해보세요</p>
            <p>공동계좌를 개설해 함께 투자를 할 수 있어요</p>
          </S.BodyItemSmallText>
          <img src="/images/main_portfolio.png" alt="main_portfolio" />
        </S.BodyItem>
        <S.BodyItem ref={(el) => (bodyItemRefs.current[2] = el)}>
          <S.BodyItemBigText2>
            <p>카카오톡으로</p>
            <span style={{ color: "black" }}>바로 초대</span>
          </S.BodyItemBigText2>
          <S.BodyItemSmallText>
            <p>카카오톡 친구를 모임 투자로 한번에 초대할 수</p>
            <p>
              있습니다. 모임멤버는{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                최대5명까지!
              </span>{" "}
            </p>
          </S.BodyItemSmallText>
          <img src="/images/main_invite.png" alt="main_invite" />
        </S.BodyItem>
        <S.BodyItem ref={(el) => (bodyItemRefs.current[3] = el)}>
          <S.BodyItemBigText2>
            <p>나의 랭킹을 확인하고</p>
            <p style={{ color: "black" }}>상품도 받아가세요</p>
          </S.BodyItemBigText2>
          <img src="/images/main_rank.png" alt="main_invite" />
        </S.BodyItem>
        <S.GroupAddBtnDiv onClick={onClickMoveLogin}>
          <span>모임 시작하기</span>
        </S.GroupAddBtnDiv>
      </S.BodyDiv>
      {showButton && (
        <S.ScrollToTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
    </S.MoblieDiv>
  );
};

export default IntroPage;

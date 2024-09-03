import { useEffect, useState } from "react";
import * as S from "./FooterNav.style";
import { useNavigate, useParams } from "react-router-dom";

const FooterNav = () => {
  const [activeIndex, setActiveIndex] = useState(
    Number(localStorage.getItem("activeIndex")) || 0
  );
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex);
  }, []);

  const handleIconClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
    localStorage.setItem("activeIndex", index);
  };

  return (
    <S.FooterDiv>
      <S.FooterIconDiv
        onClick={() => handleIconClick(0, `/group/${id}`)}
        active={activeIndex === 0}
      >
        <S.GroupIcon active={activeIndex === 0} />
        <span>모임</span>
      </S.FooterIconDiv>
      <S.FooterIconDiv
        onClick={() => handleIconClick(1, `/group/${id}/chat`)}
        active={activeIndex === 1}
      >
        <S.ChatIcon active={activeIndex === 1} />
        <span>채팅</span>
      </S.FooterIconDiv>
      <S.FooterIconDiv
        onClick={() => handleIconClick(2, `/group/${id}/stocks`)}
        active={activeIndex === 2}
      >
        <S.ChartIcon active={activeIndex === 2} />
        <span>주식</span>
      </S.FooterIconDiv>
      <S.FooterIconDiv
        onClick={() => handleIconClick(3, `/group/${id}/dashboard`)}
        active={activeIndex === 3}
      >
        <S.DashIcon active={activeIndex === 3} />
        <span>보드</span>
      </S.FooterIconDiv>
      <S.FooterIconDiv
        onClick={() => handleIconClick(4, `/group/${id}/ranking`)}
        active={activeIndex === 4}
      >
        <S.RankIcon active={activeIndex === 4} />
        <span>순위</span>
      </S.FooterIconDiv>
      <S.FooterIconDiv
        onClick={() => handleIconClick(5, `/group/${id}/mypage`)}
        active={activeIndex === 5}
      >
        <S.MyPageIcon active={activeIndex === 5} />
        <span>정보</span>
      </S.FooterIconDiv>
    </S.FooterDiv>
  );
};

export default FooterNav;

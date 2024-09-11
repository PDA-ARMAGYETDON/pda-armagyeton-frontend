import { useEffect, useState } from "react";
import * as S from "./FooterNav.style";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const FooterNav = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const code = useSelector((state) => state.group.stockcode);

  const [activeIndex, setActiveIndex] = useState(
    Number(localStorage.getItem("activeIndex")) || 0
  );

  useEffect(() => {
    const path = location.pathname;

    if (path === `/group/${id}`) {
      setActiveIndex(0);
    } else if (path === `/group/${id}/chat`) {
      setActiveIndex(1);
    } else if (path === `/group/${id}/stocks/${code}`) {
      setActiveIndex(2);
    } else if (path === `/group/${id}/dashboard`) {
      setActiveIndex(3);
    } else if (path === `/group/${id}/ranking`) {
      setActiveIndex(4);
    } else if (path === `/mypage`) {
      setActiveIndex(5);
    }

    localStorage.setItem("activeIndex", activeIndex); // localStorage에 저장
  }, [location, id, activeIndex]);

  const handleIconClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
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
        onClick={() => handleIconClick(2, `/group/${id}/stocks/${code}`)}
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

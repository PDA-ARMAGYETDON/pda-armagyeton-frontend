import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./header-stock.style";
import CheckListModal from "./CheckListModal";

const HeaderStockPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollingDirection, setScrollingDirection] = useState("");
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const onClickPageBack = () => {
    navigate(-1);
  };

  const closeRoleModal = () => {
    setIsModalOpen(false);
  };

  const openCheckListModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollingDirection("scrolling-down");
      } else {
        setScrollingDirection("scrolling-up");
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const newScrollTimeout = setTimeout(() => {
        setScrollingDirection("scrolling-up");
      }, 1000);

      setScrollTimeout(newScrollTimeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  const onClickMoveToStockSearch = () => {
    navigate(`/group/${id}/stocks/search`);
  };
  return (
    <>
      {isModalOpen && (
        <CheckListModal isOpen={isModalOpen} onClose={closeRoleModal} />
      )}
      <S.MoblieDivHeader className={scrollingDirection}>
        <div onClick={onClickPageBack}>
          <S.BackIcon />
        </div>
        <div>
          <span onClick={openCheckListModal}>
            에스파는 나야 <S.CheckListIcon />
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <S.SearchIcon onClick={onClickMoveToStockSearch} />
        </div>
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderStockPage;

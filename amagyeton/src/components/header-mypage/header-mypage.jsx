import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./header-mypage.style";
import CheckListModal from "./CheckListModal";

const HeaderMyPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollingDirection, setScrollingDirection] = useState("");
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const closeRoleModal = () => {
    setIsModalOpen(false);
  };

  const openCheckListModal = () => {
    setIsModalOpen(true);
  };

  const onClickMyInfo = () => {
    navigate(`/myinfo`);
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

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a new timeout to reset header position after a delay
      const newScrollTimeout = setTimeout(() => {
        setScrollingDirection("scrolling-up");
      }, 1000); // 1 second delay before resetting header

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

  return (
    <>
      {isModalOpen && (
        <CheckListModal isOpen={isModalOpen} onClose={closeRoleModal} />
      )}
      <S.MoblieDivHeader className={scrollingDirection}>
        <div>
          <S.LogoIcon src="/images/logo.png" alt="Logo" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span onClick={openCheckListModal}>
            에스파는 나야
            <S.CheckListIcon />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0px 10px",
          }}
        >
          <S.AlarmIcon src="/images/notification-line.png" alt="Alarm" />
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          onClick={onClickMyInfo}
        >
          <S.UserIcon src="/images/user.png" alt="User" />
        </div>
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderMyPage;

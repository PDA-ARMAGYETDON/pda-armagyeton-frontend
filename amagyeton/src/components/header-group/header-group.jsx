import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom"; // useLocation 추가
import * as S from "./header-group.style";
import CheckListModal from "./CheckListModal";
import { UserTeams } from "../../lib/apis/apis";

const HeaderGroupPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // 현재 경로를 가져오기 위해 useLocation 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollingDirection, setScrollingDirection] = useState("");
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [teamData, setTeamData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const closeRoleModal = () => {
    setIsModalOpen(false);
  };

  const openCheckListModal = () => {
    setIsModalOpen(true);
  };

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
    closeRoleModal();
  };

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const result = await UserTeams();
        if (result && result.data.length > 0) {
          setTeamData(result.data);
          const currentTeam = result.data.find(
            (e) => e.teamId === parseInt(id)
          );
          if (currentTeam) {
            setSelectedTeam(currentTeam);
          } else {
            const firstTeam = result.data[0];
            setSelectedTeam(firstTeam);

            // URL에 "pending"이 없을 때만 이동하도록 조건 추가
            if (id && !location.pathname.includes("pending")) {
              navigate(`/group/${firstTeam.teamId}`);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch teams", error);
      }
    };

    fetchTeams();
  }, [id, location.pathname]); // useEffect 의존성에 location.pathname 추가

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

  return (
    <>
      {isModalOpen && (
        <CheckListModal
          isOpen={isModalOpen}
          onClose={closeRoleModal}
          onSelectTeam={handleSelectTeam}
        />
      )}
      <S.MoblieDivHeader className={scrollingDirection}>
        <div
          onClick={() => navigate(`/group/${id}`)}
          style={{ cursor: "pointer" }}
        >
          <img src="/images/logo.png" />
        </div>
        <div>
          {selectedTeam ? <span>{selectedTeam.name}</span> : <span></span>}
          <span onClick={openCheckListModal}>
            <S.CheckListIcon />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <S.AlarmIcon />
        </div>
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderGroupPage;

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./header-group.style";
import CheckListModal from "./CheckListModal";
import { UserTeams } from "../../lib/apis/apis";

const HeaderGroupPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
            if (id) {
              navigate(`/group/${firstTeam.teamId}`);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch teams", error);
      }
    };

    fetchTeams();
  }, [id]);

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
        <div>
          <img src="/images/logo.png" />
        </div>
        <div>
          {selectedTeam ? (
            <span>{selectedTeam.name}</span>
          ) : (
            <span>Loading...</span>
          )}
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

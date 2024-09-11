import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./header-mypage.style";
import CheckListModal from "./CheckListModal";
import { UserTeams } from "../../lib/apis/apis";
import base64 from "base-64";

const HeaderMyPage = () => {
  const navigate = useNavigate();
  const [teamId, setTeamId] = useState();
  const [teamData, setTeamData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollingDirection, setScrollingDirection] = useState("");
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const { id } = useParams();

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

  const onClickMyInfo = () => {
    navigate(`/group/${id}/myinfo`);
  };

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const result = await UserTeams();
        const token = localStorage.getItem("TOKEN");

        const payload = token.split(".")[1];
        const decodedPayload = base64.decode(payload);
        const decodedData = JSON.parse(decodedPayload);
        setTeamId(decodedData.teamId);

        if (result && result.data.length > 0) {
          setTeamData(result.data);
          const currentTeam = result.data.find(
            (e) => e.teamId === parseInt(teamId)
          );
          if (currentTeam) {
            setSelectedTeam(currentTeam);
          } else {
            const firstTeam = result.data[0];
            setSelectedTeam(firstTeam);
            if (teamId) {
              navigate(`/group/${firstTeam.teamId}`);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch teams", error);
      }
    };

    fetchTeams();
  }, [teamId]);

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
        <div style={{ flex: "2" }}>
          <img src="/images/logo.png" />
        </div>
        <div style={{ flex: "7" }}>
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
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <S.AlarmIcon />
        </div>
        <div
          onClick={onClickMyInfo}
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
        >
          <S.UserIcon />
        </div>
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderMyPage;

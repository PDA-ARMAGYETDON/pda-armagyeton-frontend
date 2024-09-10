import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./header-stock.style";
import CheckListModal from "./CheckListModal";
import { UserTeams } from "../../lib/apis/apis";

const HeaderStockPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation(); // 현재 경로를 가져오기 위해 useLocation 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollingDirection, setScrollingDirection] = useState("");
  const [teamData, setTeamData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const onClickPageBack = () => {
    navigate(-1);
  };

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
  }, [id, location.pathname]);

  const onClickMoveToStockSearch = () => {
    navigate(`/group/${id}/stocks/search`);
  };
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
        <div onClick={onClickPageBack}>
          <S.BackIcon />
        </div>
        <div>
          {selectedTeam ? <span>{selectedTeam.name}</span> : <span></span>}
          <span onClick={openCheckListModal}>
            <S.CheckListIcon />
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
